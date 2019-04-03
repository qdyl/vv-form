require.config({
  baseUrl: "../formbuilder",
})
define('app',['editor'],function (editor) {
	var vm=avalon.define({
		$id:'app',
		tipText:'',
		leftPanelOpened:true,
		rightPanelOpened:true,
		init:function (initFormData) {
			editor.init(initFormData)
			avalon.scan()
		},
		toggleLeftPanel: function(){
			vm.leftPanelOpened = !vm.leftPanelOpened;
		},
		toggleRightPanel: function(){
			vm.rightPanelOpened = !vm.rightPanelOpened;
		}
	})
	return vm;
})
define('editor',['toolsPanel','contentArea'], function (toolsPanel, contentArea) {
	var vm=avalon.define({
		$id:'editor',
		init:function (initFormData) {
			toolsPanel.init();
			contentArea.init(initFormData);
		}
	})
	return vm;
});

define('contentArea',['text!template/contentArea.template.html'], function (contentareaTpl) {
	var vm=avalon.define({
		$id:'contentArea',
		initContentData:[],
		contentData:[],
		activeRowIndex: -1,
		$element:null,
		init:function (initFormData, viewMode) {
			if(!viewMode){
				$(contentareaTpl).appendTo(document.body);
				vm.DDInit();
			}
			if(initFormData){
				vm.initContentData=initFormData.data;
				vm.contentData=$.extend(true, [], initFormData.data);
				for (var i = 0; i < initFormData.data.length; i++) {
					//vm.initContentData.data[i]
				};
			}
		},
		getData4Save : function () {
			var arr=[];
			for (var i = 0; i < vm.contentData.length; i++) {
				var comp=vm.contentData[i];
				var model={
					snipId:comp.$model.snipId,
					html:comp.$model.html,
					setting:comp.compInst.setting.$model
				}
				arr.push(model);
			};
			return arr;
		},
		copyRow: function (evt, index) {
			// console.log(evt, index)
			var snipData={
				snipId:vm.contentData[index].snipId,
				html:vm.contentData[index].html,
				compInst:null
			}
			vm.contentData.splice(index+1,0,snipData);
		},
		removeRow: function (evt, index) {
			if(vm.activeRowIndex==vm.contentData.size()-1){
				vm.activeRowIndex=vm.activeRowIndex-1;
			}
			vm.contentData.splice(index,1);
		},
		DDInit: function () {
			var $element= vm.$element = $('#contentarea')
			$element.droppable({
				drop : function (evt, ui) {

				},
				tolerance : 'pointer',
				greedy : true
			});

			$element.sortable({
				items : '.ui-draggable',
				connectWith : '.connectSortable',
				'distance' : 5,
				axis : 'y',
				tolerance : 'pointer',
				handle : '.row-handle',
				delay : 200,
				cursor : 'move',
				placeholder : 'block-placeholder',
				sort : function (evt, ui) {
					// console.log(evt,ui)
				},
				start : function (e, ui) {
					$(ui.placeholder).slideUp(80);
					cb_edit = false
				},
				change : function (e, ui) {
					$(ui.placeholder).hide().slideDown(80)
				},
				beforeStop : function (evt, ui) {
					// console.log(ui.helper, ui)
					var snipId = $(ui.helper).data('snipid');

					if (snipId != undefined && snipId != null) {
						var moveSnip = {
							snipId:avalon.vmodels['snippetPicker'].snippetList[snipId].snipId,
							html:avalon.vmodels['snippetPicker'].snippetList[snipId].html,
							compInst:avalon.vmodels['snippetPicker'].snippetList[snipId].compInst

						}
						var newIndex;
						if(ui.helper.hasClass('dynamic')){//如果是从右侧拖拽进来
							newIndex = $element.find('> div:not([data-snipcat])').index(ui.placeholder);
							vm.contentData.splice(newIndex,0,moveSnip);
							//$(ui.draggable).data('snipid', null);
							if(newIndex<=vm.activeRowIndex){
								vm.activeRowIndex = vm.activeRowIndex+1;
							}
						}else{//如果是移动
							newIndex = $element.find('> div:not([data-snipcat])').not(ui.helper).index(ui.placeholder);
							var sortOriginalIndex = ui.item.attr('data-index');
							ui.item.remove();
							moveSnip = vm.contentData.splice(sortOriginalIndex,1)[0];
							vm.contentData.splice(newIndex,0,moveSnip);
							// console.log(sortOriginalIndex,' to ',newIndex)
							vm.activeRowIndex = newIndex;
						}

					}
				},
				stop: function (evt, ui) {
					// console.log(ui)
				},
				deactivate : function (evt, ui) {

					if (ui.item.parent().attr('id') == $element.attr('id')) {
						// ui.item.replaceWith(ui.item.html());
						$element.children('.ui-draggable').each(function () {
							if ($(this).children('*').length == 1) {
								$(this).remove()
							}
							if ($(this).children('*').length == 2) {
								if ($(this).children(0).prop("tagName").toLowerCase() == 'img' && $(this).children(0).attr('src').indexOf('thumbnails/') != -1) {
									$(this).remove()
								}
							}
						})
					}

				}
			});
			
		},
		onRowMouseDown: function (evt) {
			var $draggable = $(evt.target).parent()
			if($draggable.data('snipid')!= undefined && $draggable.attr('data-index')!= undefined){
				vm.activeRowIndex = Number($draggable.attr('data-index'));
			}
		}
	})
	vm.$watch('activeRowIndex', function (value, oldValue) {
		var contentData=vm.contentData[value];
		if(contentData){
			var compInst=vm.contentData[value].compInst;
			var fieldEditor = compInst.$fieldEditor || {};
		 	avalon.vmodels['fieldEditors'].visibledEditors = fieldEditor;
		 	avalon.vmodels['fieldEditors'].contentModel=compInst;
		}

	})

	// $(document).on('mousedown.editor', function (evt) {
	// 	var $draggable = $(evt.target).parents('.ui-draggable');
	// 	if ($draggable.length > 0 && $(evt.target).parents('#contentarea').length > 0) {
	// 		// $draggable.trigger('rowblockmousedown',$draggable.attr('data-index'));
	// 		vm.activeRowIndex = Number($draggable.attr('data-index'));
	// 	}
	// });

	$('#designer_save').on('click',function (evt) {
		alert(JSON.stringify(vm.getData4Save()));
		window.console && console.log(JSON.stringify(vm.getData4Save()))
	})

	return vm;
})



//侧栏工具面板
define('toolsPanel',['text!template/toolsPanel.template.html','snippetPicker','formControls','fieldEditors'], function (template,snippetPicker) {
	var snipIdSeed=0;
	var vm=avalon.define({
		$id:'toolsPanel',
		init:function () {
			var $toolsPanel=$(template).appendTo(document.body);
			snippetPicker.init()
		}
		
	})

	return vm;
})
//侧栏工具面板
define('snippetPicker',[], function () {
	var snipIdSeed=0;
	var vm=avalon.define({
		$id:'snippetPicker',
		selectedSnippetCategorie: 'all',
		snippetCategories:['all'],
		//["All", "Title", "Title, Subtitle", "Info, Title", "Heading, Paragraph", "Paragraph", "Images + Caption", "Images", "Single Image", "Call to Action", "List", "Quotes", "Profile", "Map", "Social", "Separator", "Video", "表单"]
		snippetList:[],
		init:function () {
			for(var k in avalon.components){
				var comp=avalon.components[k];
				if(comp.$snipCat){
					vm.snippetList.push({
						snipId: snipIdSeed++,
						thumb: comp.$thumb,
						snipCat:','+comp.$snipCat+',',
						html: '<'+k+'></'+k+'>'
					})
					if(vm.snippetCategories.indexOf(comp.$snipCat)==-1){
						vm.snippetCategories.push(comp.$snipCat)
					}
				}
			}

		},
		//拖拽的初始化
		cb_list:'#contentarea',
		onRepeatRendered: function (e) {
			// console.log(e)
			vm.DDInit();
		},
		DDInit: function () {
			$('#divSnippetList > div').draggable({
				cursor : 'move',
				helper : function (evt) {
					return $('<div class="dynamic" data-snipid="'+evt.delegateTarget.getAttribute('data-snipid')+'"></div>')[0]
				},
				// appendTo:'#divSnippetList',
				connectToSortable : vm.cb_list,
				stop : function (evt, ui) {
					$('#contentarea > div').each(function () {
						if ($(this).children("images").length == 1) {
							$(this).remove()
						}
					})
				}
			});

		}
	})

	return vm;
})

define('util',[],function () {
	return {
		heredoc: function (fn) {
			return fn.toString()
			        .replace(/^[^\/]+\/\*!?\s?/, '')
			        .replace(/\*\/[^\/]+$/, '')
		},
		generateId: function(){
			//12位长唯一字符串
			return (+new Date()).toString(36) + Math.round(Math.random() * 1632959 + 46656).toString(36);
		}
	}
})

define('formControls',['util', 'addressData.js'], function (util, addressData) {

	avalon.component("ms:titlelabel", {
		$snipCat:'all',
		$thumb:'snippets/thumbnails/fl1.png',
		setting:{
			label:'Title',
			help:'Supporting help text',
		},
		$fieldEditor:{
			'label':'标题',
			'help':'填写帮助'
		},
		$template: util.heredoc(function (vm) {
			/*
  <div class="form-horizontal clearfix">
    <h3>{{setting.label}}</h3>
    <p class="help-block">{{setting.help}}</p>
	<hr>
  </div>
			*/
		}),
		$init: function(me,el,vms){

		},
		$ready: function(me,el,vms){
			var index=el.parentNode.getAttribute('data-index');
			avalon.vmodels['contentArea'].contentData[index].compInst = me;
		}

	})

	avalon.component("ms:textinput", {
		$snipCat:'输入框',
		$thumb:'snippets/thumbnails/ft1.png',
		setting:{
			label:'Text input:',
			placeholder:'placeholder',
			help:'Supporting help text',
			required:[],
			name: util.generateId()
		},
		$fieldEditor:{
			'label':'标题',
			'placeholder':'描述文字',
			'help':'填写帮助',
			required:'这是个必填项'
		},
		$template: util.heredoc(function (vm) {
			/*
  <div class="form-horizontal">
  <div class="form-group">
    <label class="col-sm-3 control-label">{{setting.label}}</label>
    <div class="col-sm-8">
      <input type="text" ms-attr-name="setting.name" ms-attr-placeholder="setting.placeholder" ms-attr-verify="{{setting.required.length?'NotNull':''}}" class="form-control">
      <p class="help-block">{{setting.help}}</p>
    </div>
  </div>
  </div>
			*/
		}),
		$ready: function(me,el,vms){
			var index=el.parentNode.getAttribute('data-index');
			avalon.vmodels['contentArea'].contentData[index].compInst = me;
		}

	})


	avalon.component("ms:numberinput", {
		$snipCat:'输入框',
		$thumb:'snippets/thumbnails/ft8.png',
		setting:{
			label:'Number input:',
			help:'Supporting help text',
			required: [],
			name: util.generateId()
		},
		$fieldEditor:{
			'label':'标题',
			'help':'填写帮助',
			required:'这是个必填项'
		},
		$template: util.heredoc(function (vm) {
			/*
    <div class="form-horizontal">
    <div class="form-group">
      <label class="col-sm-3 control-label">{{setting.label}}</label>
      <div class="col-sm-8">
        <input type="text" ms-attr-name="setting.name" class="form-control" ztype="number" ms-attr-verify="Int{{setting.required.length?'&&NotNull':''}}">
        <p class="help-block">{{setting.help}}</p>
      </div>
    </div>
    </div>
			*/
		}),
		$ready: function(me,el,vms){
			var index=el.parentNode.getAttribute('data-index');
			avalon.vmodels['contentArea'].contentData[index].compInst = me;
			// if(window.Zving && Zving.ComponentManager){
			// 	ComponentManager.initChildren(el);
			// }
		},
	})
	avalon.component("ms:dateinput", {
		$snipCat:'输入框',
		$thumb:'snippets/thumbnails/ft9.png',
		setting:{
			label:'Date input:',
			help:'Supporting help text',
			required: [],
			name: util.generateId()
		},
		$fieldEditor:{
			'label':'标题',
			'help':'填写帮助',
			required:'这是个必填项'
		},
		$template: util.heredoc(function (vm) {
			/*
    <div class="form-horizontal">
    <div class="form-group">
      <label class="col-sm-3 control-label">{{setting.label}}</label>
      <div class="col-sm-8">
        <div class="input-group">
        <input type="text" ms-attr-name="setting.name" class="form-control" ztype="date" ms-attr-verify="Date{{setting.required.length?'&&NotNull':''}}">
		</div>
        <p class="help-block">{{setting.help}}</p>
      </div>
    </div>
    </div>
			*/
		}),
		$ready: function(me,el,vms){
			var index=el.parentNode.getAttribute('data-index');
			avalon.vmodels['contentArea'].contentData[index].compInst = me;
			// if(window.Zving && Zving.ComponentManager){
			// 	ComponentManager.initChildren(el);
			// }
		},
	})
	avalon.component("ms:timeinput", {
		$snipCat:'输入框',
		$thumb:'snippets/thumbnails/ft10.png',
		setting:{
			name: util.generateId(),
			label:'Time input:',
			help:'Supporting help text',
			required: [],
		},
		$fieldEditor:{
			'label':'标题',
			'help':'填写帮助',
			required:'这是个必填项'
		},
		$template: util.heredoc(function (vm) {
			/*
    <div class="form-horizontal">
    <div class="form-group">
      <label class="col-sm-3 control-label">{{setting.label}}</label>
      <div class="col-sm-8">
        <input type="text" ms-attr-name="setting.name" class="form-control" ztype="time" ms-attr-verify="Time{{setting.required.length?'&&NotNull':''}}">
        <p class="help-block">{{setting.help}}</p>
      </div>
    </div>
    </div>
			*/
		}),
		$ready: function(me,el,vms){
			var index=el.parentNode.getAttribute('data-index');
			avalon.vmodels['contentArea'].contentData[index].compInst = me;
			// if(window.Zving && Zving.ComponentManager){
			// 	ComponentManager.initChildren(el);
			// }
		},
	})


	avalon.component("ms:prependedtext", {
		$snipCat:'输入框',
		$thumb:'snippets/thumbnails/ft3.png',
		setting:{
			name: util.generateId(),
			label:'Prepended text:',
			placeholder:'placeholder',
			help:'Supporting help text',
			addon:'^_^',
			required: [],
		},
		$fieldEditor:{
			'label':'标题',
			'addon':'附加文字',
			'placeholder':'描述文字',
			'help':'填写帮助',
			required:'这是个必填项'
		},
		$template: util.heredoc(function (vm) {
			/*
    <div class="form-horizontal">
    <div class="form-group">
      <label class="col-sm-3 control-label">{{setting.label}}</label>
      <div class="col-sm-8">
        <div class="input-group">
          <span class="input-group-addon">{{setting.addon}}</span>
          <input type="text" ms-attr-name="setting.name" class="form-control" ms-attr-placeholder="setting.placeholder" ms-attr-verify="{{setting.required.length?'NotNull':''}}">
        </div>
        <p class="help-block">{{setting.help}}</p>
      </div>
    </div>
    </div>
			*/
		}),
		$ready: function(me,el,vms){
			var index=el.parentNode.getAttribute('data-index');
			avalon.vmodels['contentArea'].contentData[index].compInst = me;
		}
	})


	avalon.component("ms:appendedtext", {
		$snipCat:'输入框',
		$thumb:'snippets/thumbnails/ft4.png',
		setting:{
			name: util.generateId(),
			label:'Appended text:',
			placeholder:'placeholder',
			help:'Supporting help text',
			addon:'^_^',
			required: [],
		},
		$fieldEditor:{
			'label':'标题',
			'addon':'附加文字',
			'placeholder':'描述文字',
			'help':'填写帮助',
			required:'这是个必填项'
		},
		$template: util.heredoc(function (vm) {
			/*
    <div class="form-horizontal">
    <div class="form-group">
      <label class="col-sm-3 control-label">{{setting.label}}</label>
      <div class="col-sm-8">
        <div class="input-group">
          <input type="text" ms-attr-name="setting.name" class="form-control" ms-attr-placeholder="setting.placeholder" ms-attr-verify="{{setting.required.length?'NotNull':''}}">
          <span class="input-group-addon">{{setting.addon}}</span>
        </div>
        <p class="help-block">{{setting.help}}</p>
      </div>
    </div>
    </div>
			*/
		}),
		$ready: function(me,el,vms){
			var index=el.parentNode.getAttribute('data-index');
			avalon.vmodels['contentArea'].contentData[index].compInst = me;
		}
	})

	avalon.component("ms:textarea", {
		$snipCat:'输入框',
		$thumb:'snippets/thumbnails/ft7.png',
		setting:{
			label:'Textarea:',
			placeholder:'placeholder',
		 	help:'最多140个字',
			maxlength:140,
			required:[],
			name: util.generateId()
		},
		$fieldEditor:{
			'label':'标题',
			'placeholder':'描述文字',
	 		'help':'填写帮助',
			maxlength:'最大长度',
			required:'这是个必填项'
		},
		$template: util.heredoc(function (vm) {
			/*
    <div class="form-horizontal">
    <div class="form-group">
      <label class="col-sm-3 control-label">{{setting.label}}</label>
      <div class="col-sm-8">
        <div class="textarea">
            <textarea rows="4" ms-attr-name="setting.name" class="form-control" ms-attr-maxlength="setting.maxlength" ms-attr-verify="{{setting.maxlength?'Length<='+setting.maxlength:''}}{{setting.required.length?'&&NotNull':''}}" ms-attr-placeholder="setting.placeholder"></textarea>
			<p class="help-block">{{setting.help}}</p>
        </div>
      </div>
    </div>
    </div>
			*/
		}),
		$ready: function(me,el,vms){
			var index=el.parentNode.getAttribute('data-index');
			avalon.vmodels['contentArea'].contentData[index].compInst = me;
		}
	})


	avalon.component("ms:selectbasic", {
		$snipCat:'列表选择',
		$thumb:'snippets/thumbnails/fs1.png',
		setting:{
			label:'Select - Basic:',
			option:'Enter\nYour\nOptions\nHere!',
			optionList:'Enter\nYour\nOptions\nHere!'.split('\n'),
			name: util.generateId()
		},
		$fieldEditor:{
			'label':'标题',
			'option':'列表项',
		},
		$template: util.heredoc(function (vm) {
			/*
    <div class="form-horizontal">
    <div class="form-group">
      <label class="col-sm-3 control-label">{{setting.label}}</label>
      <div class="col-sm-8">
        <select class="form-control" ms-attr-name="setting.name">
          <option ms-repeat="setting.optionList" ms-attr-value="el" >{{el}}</option>
        </select>
      </div>
    </div>
    </div>
			*/
		}),
		$init: function (me, el) {
			me.$watch('setting.option',function (val,oldVal) {
				var list=$.trim(val).split(/[\r\n]+/);
				me.setting.optionList.clear();
				me.setting.optionList.pushArray(list);
			})
		},
		$ready: function(me,el,vms){
			var index=el.parentNode.getAttribute('data-index');
			avalon.vmodels['contentArea'].contentData[index].compInst = me;
		}
	})

    var provinceList = [
        // {"name": "安徽省", "id": 6},
        // {"name": "广东省", "id": 5}
    ];
    var cityList = {
        // 5: [{name: "广州市", id: 500}, {name: "深圳市", id: 512}],
        // 6: [{name: "合肥市", id: 601}, {name: "芜湖市", id: 609}]
    };
    var districtList = {
        // 500: ["从化市", "荔湾区", "越秀区", "海珠区", "天河区", "白云区", "花都区", "黄埔区", "萝岗区", "南沙区", "番禺区", "增城市"],
        // 512: ["罗湖区", "福田区", "南山区", "宝安区", "龙岗区", "盐田区"],
        // 601: ["瑶海区", "庐阳区", "蜀山区", "包河区", "长丰县", "肥东县", "肥西县"],
        // 609: ["镜湖区", "弋江区", "鸠江区", "三山区", "芜湖县", "繁昌县", "南陵县"]
    };

    var provIdSeed=0;
    var cityIdSeed=100;
    // var distIdSeed=10000;
    for(var p in addressData){
    	provinceList.push({
    		name: p,
    		id: ++provIdSeed
    	})
		var cl=[];
    	for(var c in addressData[p]){
    		cl.push({
    			name:c,
    			id:++cityIdSeed
    		})
    		districtList[cityIdSeed]=addressData[p][c];
    	}
		cityList[provIdSeed]=cl;
    }

    var findVM=function (el) {
	    while (el && el.nodeType === 1) {
	    	if(el.tagName.indexOf(':')>0){
		        var vmid = el.identifier
		        if (vmid) {
		            return avalon.vmodels[vmid]
		        }
	    	}
	        el = el.parentNode
	    }
    }
	avalon.component("ms:addressselector", {
		$snipCat:'列表选择',
		$thumb:'snippets/thumbnails/fs3.png',
		setting:{
			label:'Address selector:',
			help:'Supporting help text',
			required: [],
			name: util.generateId()
		},
		$fieldEditor:{
			'label':'标题',
			'help':'填写帮助',
			required:'这是个必填项'
		},
		$template: util.heredoc(function (vm) {
			/*
    <div class="form-horizontal">
    <div class="form-group">
      <label class="col-sm-3 control-label">{{setting.label}}</label>
      <div class="col-sm-8">
      	<div class="form-group">
      		<div class="col-sm-4">
	            <select ms-change="change1" ms-attr-name="provinces{{setting.name}}" class="form-control">
	                <option value="">请选择</option>
	                <option ms-repeat="_provinces" ms-attr-value="el.id"> {{ el.name }} </option>
	            </select>
            </div>
            <div class="col-sm-4">
	            <select ms-change="change2" ms-attr-name="cities{{setting.name}}" class="form-control">
	                <option value="">请选择</option>
	                <option ms-repeat="_cities" ms-attr-value="el.id"> {{ el.name }} </option>
	            </select> 
             </div>
            <div class="col-sm-4">
	            <select ms-change="change3" ms-attr-name="districts{{setting.name}}" class="form-control">
	                <option value="">请选择</option>
	                <option ms-repeat="_districts" ms-attr-value="el"> {{ el }} </option>
	            </select>
            </div>
        </div>
      	<div>
            <input type="text" ms-attr-name="setting.name" class="form-control" ms-attr-verify="{{setting.required.length?'NotNull':''}}"> 
            <p class="help-block">{{setting.help}}</p>
        </div>
      </div>
    </div>
    </div>
			*/
		}),
		$ready: function(me,el,vms){
			el.identifier = me.$id;
			var index=el.parentNode.getAttribute('data-index');
			avalon.vmodels['contentArea'].contentData[index].compInst = me;
		},
        // 用于下拉框绑定的数据
        _provinces : provinceList,
        _cities : [],
        _districts : [],
        // 省市区选择的文本
        province : "",
        city : "",
        district : "",
		change1: function(evt) {
			var vm=findVM(evt.target);
            var index = this.options[this.selectedIndex].value;
            // 当索引是-1的时候，说明是请选择，需要对市区数组和文本进行空置
            if (index == -1) {
                vm._cities = [];
                vm._districts = [];
                vm.province = vm.city = vm.district = "";
            }
            // 筛选对应的市数据
            else {
                vm.province = this.options[this.selectedIndex].text;
                vm._cities = cityList[index];
                vm._districts = [];
            }
        },
		change2: function(evt) {
			var vm=findVM(evt.target);
            var index = this.options[this.selectedIndex].value;
            if (index == -1) {
                vm._districts = [];
                vm.city = vm.district = "";
            }
            else {
                vm.city = this.options[this.selectedIndex].text;
                vm.district = "";
                vm._districts = districtList[index];
            }
        },
		change3: function(evt) {
			var vm=findVM(evt.target);
            var index = this.options[this.selectedIndex].value;
            if (index == -1) {
                vm.district = "";
            }
            else {
                vm.district = this.options[this.selectedIndex].text;
            }
        }
	})


	avalon.component("ms:selectmultiple", {
		$snipCat:'列表选择',
		$thumb:'snippets/thumbnails/fs2.png',
		setting:{
			label:'Select - Multiple:',
			option:'Enter\nYour\nOptions\nHere!',
			optionList:'Enter\nYour\nOptions\nHere!'.split('\n'),
			name: util.generateId()
		},
		$fieldEditor:{
			'label':'标题',
			'option':'列表项'
		},
		$template: util.heredoc(function (vm) {
			/*
    <div class="form-horizontal">
    <div class="form-group">
      <label class="col-sm-3 control-label">{{setting.label}}</label>
      <div class="col-sm-8">
        <select ms-attr-name="setting.name" class="form-control" multiple="multiple">
          <option ms-repeat="setting.optionList" ms-attr-value="el" >{{el}}</option>
        </select>
      </div>
    </div>
    </div>
			*/
		}),
		$init: function (me, el) {
			me.$watch('setting.option',function (val,oldVal) {
				var list=$.trim(val).split(/[\r\n]+/);
				me.setting.optionList.clear();
				me.setting.optionList.pushArray(list);
			})
		},
		$ready: function(me,el,vms){
			var index=el.parentNode.getAttribute('data-index');
			avalon.vmodels['contentArea'].contentData[index].compInst = me;
		}
	})


	avalon.component("ms:checkboxes", {
		$snipCat:'单选、多选',
		$thumb:'snippets/thumbnails/fc1.png',
		setting:{
			label:'Checkboxes:',
			option:'Option one\nOption two',
			optionList:'Option one\nOption two'.split('\n'),
			name: util.generateId()
		},
		$fieldEditor:{
			'label':'标题',
			'option':'多选项',
		},
		$template: util.heredoc(function (vm) {
			/*
    <div class="form-horizontal">
    <div class="form-group">
      <label class="col-sm-3 control-label">{{setting.label}}</label>
      <div class="col-sm-8">
        <div class="checkbox" ms-repeat="setting.optionList">
        	<label><input type="checkbox" ms-attr-name="setting.name" ms-attr-value="el">
        	{{el}}
        	</label>
        </div>
      </div>
    </div>
    </div>
			*/
		}),
		$init: function (me, el) {
			me.$watch('setting.option',function (val,oldVal) {
				var list=$.trim(val).split(/[\r\n]+/);
				me.setting.optionList.clear();
				me.setting.optionList.pushArray(list);
			})
		},
		$ready: function(me,el,vms){
			var index=el.parentNode.getAttribute('data-index');
			avalon.vmodels['contentArea'].contentData[index].compInst = me;
		}
	})


	avalon.component("ms:radios", {
		$snipCat:'单选、多选',
		$thumb:'snippets/thumbnails/fc2.png',
		setting:{
			label:'Radio buttons:',
			option:'Option one\nOption two',
			optionList:'Option one\nOption two'.split('\n'),
			name: util.generateId()
		},
		$fieldEditor:{
			'label':'标题',
			'option':'单选项',
		},
		$template: util.heredoc(function (vm) {
			/*
    <div class="form-horizontal">
    <div class="form-group">
      <label class="col-sm-3 control-label">{{setting.label}}</label>
      <div class="col-sm-8">
        <div class="radio" ms-repeat="setting.optionList">
	        <label><input type="radio" ms-attr-value="el" ms-attr-name="setting.name" ms-attr-checked="$first">
	          {{el}}
	        </label>
        </div>
      </div>
    </div>
    </div>
			*/
		}),
		$init: function (me, el) {
			me.$watch('setting.option',function (val,oldVal) {
				var list=$.trim(val).split(/[\r\n]+/);
				me.setting.optionList.clear();
				me.setting.optionList.pushArray(list);
			})
		},
		$ready: function(me,el,vms){
			var index=el.parentNode.getAttribute('data-index');
			avalon.vmodels['contentArea'].contentData[index].compInst = me;
		}
	})


	avalon.component("ms:inlinecheckboxes", {
		$snipCat:'单选、多选',
		$thumb:'snippets/thumbnails/fc3.png',
		setting:{
			name: util.generateId(),
			label:'Inline Checkboxes:',
			option:'one\ntwo\nthree',
			optionList:'one\ntwo\nthree'.split('\n'),
		},
		$fieldEditor:{
			'label':'标题',
			'option':'多选项',
		},
		$template: util.heredoc(function (vm) {
			/*
    <div class="form-horizontal">
    <div class="form-group">
      <label class="col-sm-3 control-label">{{setting.label}}</label>
        <div class="col-sm-8">
        	<label class="checkbox-inline" ms-repeat="setting.optionList">
        	<input type="checkbox" ms-attr-name="setting.name" ms-attr-value="el">
        	{{el}}
        	</label>
        </div>
      </div>
    </div>
    </div>
			*/
		}),
		$init: function (me, el) {
			me.$watch('setting.option',function (val,oldVal) {
				var list=$.trim(val).split(/[\r\n]+/);
				me.setting.optionList.clear();
				me.setting.optionList.pushArray(list);
			})
		},
		$ready: function(me,el,vms){
			var index=el.parentNode.getAttribute('data-index');
			avalon.vmodels['contentArea'].contentData[index].compInst = me;
		}
	})


	avalon.component("ms:inlineradios", {
		$snipCat:'单选、多选',
		$thumb:'snippets/thumbnails/fc4.png',
		setting:{
			label:'Inline radios:',
			option:'one\ntwo\nthree',
			optionList:'one\ntwo\nthree'.split('\n'),
			name: util.generateId()
		},
		$fieldEditor:{
			'label':'标题',
			'option':'单选项',
		},
		$template: util.heredoc(function (vm) {
			/*
    <div class="form-horizontal">
    <div class="form-group">
      <label class="col-sm-3 control-label">{{setting.label}}</label>
      <div class="col-sm-8">
        <label class="radio-inline" ms-repeat="setting.optionList">
          <input type="radio" ms-attr-value="el" ms-attr-name="setting.name" ms-attr-checked="$first">
          {{el}}
        </label>
      </div>
    </div>
    </div>
			*/
		}),
		$init: function (me, el) {
			me.$watch('setting.option',function (val,oldVal) {
				var list=$.trim(val).split(/[\r\n]+/);
				me.setting.optionList.clear();
				me.setting.optionList.pushArray(list);
			})
		},
		$ready: function(me,el,vms){
			var index=el.parentNode.getAttribute('data-index');
			avalon.vmodels['contentArea'].contentData[index].compInst = me;
		}
	})

	avalon.component("ms:starrating", {
		$snipCat:'单选、多选',
		$thumb:'snippets/thumbnails/fc5.png',
		setting:{
			label:'Star Rating:',
			rateValue:0,
			help:'Supporting help text',
			name: util.generateId()
		},
		$fieldEditor:{
			'label':'标题',
			'help':'上传文件说明'
		},
		$template: util.heredoc(function (vm) {
			/*
    <div class="form-horizontal">
    <div class="form-group">
      <label class="col-sm-3 control-label">{{setting.label}}</label>
      <div class="col-sm-8">
        <ul class="star-rating" id="rating1">
		  <input type="hidden" ms-attr-name="setting.name" ms-duplex="setting.rateValue" />
		  <li>☆☆☆☆☆<a href="#" class="star-clear" data-rate="0">×</a></li>
		  <li class="current-rating" ms-css-width="{{setting.rateValue}}em">★★★★★</li>
		  <li><a href="#" style="width:5em;" data-rate="5">★★★★★</a></li>
		  <li><a href="#" style="width:4em;" data-rate="4">★★★★</a></li>
		  <li><a href="#" style="width:3em;" data-rate="3">★★★</a></li>
		  <li><a href="#" style="width:2em;" data-rate="2">★★</a></li>
		  <li><a href="#" style="width:1em;" data-rate="1">★</a></li>
		</ul>
      	<p class="help-block">{{setting.help}}</p>
      </div>
    </div>
    </div>
			*/
		}),
		$ready: function(me,el,vms){
			var index=el.parentNode.getAttribute('data-index');
			avalon.vmodels['contentArea'].contentData[index].compInst = me;
			$(el).on('click','a',function (evt) {
				me.setting.rateValue=this.getAttribute('data-rate');
				evt.preventDefault();
			})

		},
		$dispose: function (vm, el) {
	        $(el).off()
	    }
	})


	avalon.component("ms:fileupload", {
		$snipCat:'文件、按钮',
		$thumb:'snippets/thumbnails/ff1.png',
		setting:{
			name: util.generateId(),
			label:'File Upload:',
			help:'Supporting help text',
		},
		$fieldEditor:{
			'label':'标题',
			'help':'上传文件说明'
		},
		$template: util.heredoc(function (vm) {
			/*
    <div class="form-horizontal">
    <div class="form-group">
      <label class="col-sm-3 control-label">{{setting.label}}</label>
      <div class="col-sm-8">
        <input class="input-file" type="file" ms-attr-name="setting.name">
      	<p class="help-block">{{setting.help}}</p>
      </div>
    </div>
    </div>
			*/
		}),
		$ready: function(me,el,vms){
			var index=el.parentNode.getAttribute('data-index');
			avalon.vmodels['contentArea'].contentData[index].compInst = me;
		}
	})


	avalon.component("ms:button", {
		$snipCat:'文件、按钮',
		$thumb:'snippets/thumbnails/fb1.png',
		setting:{
			label:'',
			button:'Submit',
			buttonColor:'btn-primary',
		},
		$fieldEditor:{
			'label':'标题',
			button:'按钮文字',
			buttonColor:'风格'
		},
		$template: util.heredoc(function (vm) {
			/*
    <div class="form-horizontal">
    <div class="form-group">
      <label class="col-sm-3 control-label">{{setting.label}}</label>
      <div class="col-sm-8">
        <button class="btn" ms-class="{{setting.buttonColor}}">{{setting.button}}</button>
      </div>
    </div>
    </div>
			*/
		}),
		$ready: function(me,el,vms){
			var index=el.parentNode.getAttribute('data-index');
			avalon.vmodels['contentArea'].contentData[index].compInst=me;
		}
	})


    return avalon;
});


define('fieldEditors',[], function () {
	var vm=avalon.define({
		$id:'fieldEditors',
		visibledEditors:{},
		contentModel:{setting:{}}
	});

	return vm;
});
define('formRender',[], function () {

	avalon.component("ms:formrender", {
		$slot: "content",
    	content: "",
		$template: "{{content|html}}",
		$ready: function(me,el,vms){
			if(window.Zving && Zving.ComponentManager){
				ComponentManager.initChildren(el);
			}
		}
	})
	return avalon;
});
