<template>
  <div>
    <!-- 左-->
    <left-panel @childdrag="receive"></left-panel>
    <!-- 中2-->
    <div id="bodyOfPage" class="body-of-page" :class="extendLeftOrRight">
      <div>
        <ul id="contentarea" class="contentarea ui-droppable ui-sortable">
          <draggable v-model="userFormEles" :options="mainOptions">
              <li v-for="(item,index) in userFormEles"
                  v-html="item.formContent"
                  v-bind:class="{'ui-draggable':cur===index,'ui-dragbox-outlined':cur===index}"
                  @click="hoverclick(index,$event)">
              </li>
          </draggable>
        </ul>
      </div>
    </div>
    <!-- 右-->
    <div class="tool-panel-right" :class="{isPullAwayClass:isPullAway}">
      <a class="panel-open-btn-right" href="##;">
        <i class="glyphicon glyphicon-menu-right" @click="pullAwayRight"></i></a>

      <dl class="accordionPanel">
        <dt class="accordionPanelTab"><b>属性</b></dt>
        <dd class="accordionPanelContent">
          <!-- 属性 -->
          <div id="fieldEditors" avalonctrl="fieldEditors" >
            <!-- 第零：0、1、2、3、4、5、6、7、8、9、10、11、12、13、14、15、16、17-->
            <div class="form-group" v-show="curIndex!==''" style="">
              <label class="control-label">标题: </label>
              <input type="text" class="form-control input-sm">
            </div>
            <!-- 第一：5、6-->
            <div class="form-group" v-show="curIndex===5||curIndex===6">
              <label class="control-label">附加文字: </label>
              <input type="text" class="form-control input-sm">
            </div>
            <!-- 第二：1、5、6、7-->
            <div class="form-group" v-show="curIndex===1||curIndex===5||curIndex===6||curIndex===7">
              <label class="control-label">描述文字: </label>
              <input type="text" class="form-control input-sm">
            </div>
            <!-- 第三：0、1、2、3、4、5、6、7、9、15、16-->
            <div class="form-group" v-show="curIndex!=='' && curIndex!==8 && curIndex!==10 && curIndex!==11 && curIndex!==12 && curIndex!==13 && curIndex!==14 && curIndex!==17">
              <label class="control-label">填写帮助: </label>
              <input type="text" class="form-control input-sm">
            </div>
            <!-- 第四：8、10、11、12、13、14-->
            <div class="form-group" v-show="curIndex===8||curIndex===10||curIndex===11||curIndex===12||curIndex===13||curIndex===14">
              <label class="control-label" v-show="curIndex===8||curIndex===10">列表项: </label>
              <label class="control-label" v-show="curIndex===11||curIndex===13">多选项: </label>
              <label class="control-label" v-show="curIndex===12||curIndex===14">单选项: </label>
              <textarea class="form-control" style="min-height: 100px"></textarea>
            </div>
            <!-- 第五：17-->
            <div class="form-group" v-show="curIndex===17">
              <label class="control-label">按钮文字: </label>
              <input class="form-control input-sm" type="text">
              <label class="control-label">风格: </label>
              <select class="form-control input-sm">
                <option value="btn-default">Default</option>
                <option value="btn-primary">Primary</option>
                <option value="btn-info">Info</option>
                <option value="btn-success">Success</option>
                <option value="btn-warning">Warning</option>
                <option value="btn-danger">Danger</option>
              </select>
            </div>
            <!-- 第六：7、-->
            <div class="form-group" v-show="this.curIndex===7">
              <label class="control-label">最大长度: </label>
              <input type="text" class="form-control input-sm" verify="Int">
            </div>
            <!-- 第七：-->
            <div class="form-group checkbox" style="display: none;">
              <label><input type="checkbox" class="input-inline">: </label>
            </div>
            <!-- 第八：1、2、3、4、5、6、7-->     <!--9、10、11、12、13、14、15、16、17-->
            <div class="form-group checkbox"   v-show="curIndex===1||curIndex===2||curIndex===3||curIndex===4||curIndex===5||curIndex===6||curIndex===7">
              <label><input type="checkbox" value="NotNull" class="input-inline">这是个必填项</label>
            </div>

          </div>

          <!-- /属性 -->
        </dd>
      </dl>

    </div>
  </div>
</template>

<script>
  import Draggable from 'vuedraggable'
  import LeftPanel from './LeftPanel'
  export default {
    name: "main",
    components:{
      LeftPanel,
      Draggable
    },
    data(){
      return{
        isPullAway:false,
        cur:'',
        curIndex:'',
        dataIndex:'11111',
        // 0、最原始的form表单数据--不能修改
        originFormData:[
          {id:0,
            title:'活动报名表',
            info:'请如实填写，如有弄虚作假取消参与资格。'
          },
          {id:1,
            title:'Text input:',
            info:'Supporting help text'
          },
          {id:2,
            title:'Number input:',
            info:'Supporting help text'
          },
          {id:3,
            title:'生日',
            info:'不可虚报年龄'
          },
          {id:4,
            title:'Time input:',
            info:'Supporting help text'
          },
          {id:5,
            title:'Prepended text:',
            info:'Supporting help text'
          },
          {id:6,
            title:'Appended text:',
            info:'Supporting help text'
          },
          {id:7,
            title:'Select - Basic:',
            info:''
          },
          {id:8,
            title:'Textarea:',
            info:'最多140个字'
          },
          {id:9,
            title:'籍贯',
            info:''
          },
          {id:10,
            title:'Select - Multiple:',
            info:''
          },
          {id:11,
            title:'Checkboxes',
            info:''
          },
          {id:12,
            title:'Radio buttons:',
            info:''
          },
          {id:13,
            title:'Inline Checkboxes:',
            info:''
          },
          {id:14,
            title:'Inline radios:',
            info:''
          },
          {id:15,
            title:'星号评级',
            info:'零星视为无效评级'
          },
          {id:16,
            title:'File Upload:',
            info:'Supporting help text'
          },
          {id:17,
            title:'aaa',
            info:'Submit'
          },
        ],
        // 1、用户二次修改的表单数据
        userFormData:[],
        // 2、用户二次修改的form表单控件
        userFormEles:[],
        // 3、vue.draggable配置的参数
        mainOptions:{
          animation:300,
          group:'forms'
        }
      }
    },
    computed:{
      // 0、最原始的form表单控件--不能修改
      originFormEles(){
        return [
          {dataSnipid:0,formContent:`<section class="ui-draggable" data-snipid="0" v-bind:data-index="dataIndex">
            <div config="el">
              <div class="form-horizontal clearfix">
                <h3>${this.originFormData[0].title}</h3>
                <p class="help-block">${this.originFormData[0].info}</p>
                <hr>
              </div>
            </div>
            <div class="row-mask"></div>
            <div class="row-tool" style="display: none;">
            <div class="row-handle"><i class="icon-move"></i></div>
            <div class="row-copy"><i class="icon-plus"></i></div>
            <div class="row-remove"><i class="icon-remove"></i></div>
          </div>
          </section>`},
          {dataSnipid:1,formContent:`<section class="ui-draggable" data-snipid="1" v-bind:data-index="dataIndex">
            <div>
              <div class="form-horizontal">
                <div class="form-group">
                  <label class="col-sm-3 control-label">${this.originFormData[1].title}</label>
                  <div class="col-sm-8">
                    <input type="text" class="form-control" name="jqrnfa1ogplx" placeholder="placeholder" verify="">
                    <p class="help-block">${this.originFormData[0].info}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row-mask"></div>
            <div class="row-tool" style="display: none;">
              <div class="row-handle"><i class="icon-move"></i></div>
              <div class="row-copy"><i class="icon-plus"></i></div>
              <div class="row-remove"><i class="icon-remove"></i></div>
            </div>
          </section>`},
          {dataSnipid:2,formContent:`<section class="ui-draggable" data-snipid="2" v-bind:data-index="dataIndex">
            <div>
              <div class="form-horizontal">
                <div class="form-group">
                  <label class="col-sm-3 control-label">${this.originFormData[2].title}</label>
                  <div class="col-sm-8">
                    <input type="text" class="form-control" ztype="number" name="jrizdgvzl5eg" verify="Int">
                    <p class="help-block">${this.originFormData[2].info}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row-mask"></div>
            <div class="row-tool" style="display: none;">
              <div class="row-handle"><i class="icon-move"></i></div>
              <div class="row-copy"><i class="icon-plus"></i></div>
              <div class="row-remove"><i class="icon-remove"></i></div>
            </div>
          </section>`},
          {dataSnipid:3,formContent:`<section class="ui-draggable " data-snipid="3" v-bind:data-index="dataIndex">
            <div config="el">
              <div class="form-horizontal">
                <div class="form-group">
                  <label class="col-sm-3 control-label">${this.originFormData[3].title}</label>
                  <div class="col-sm-8">
                    <div class="input-group">
                      <input type="text" class="form-control" ztype="date" name="ih62q5uncccc" verify="Date&amp;&amp;NotNull">
                    </div>
                    <p class="help-block">${this.originFormData[3].info}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row-mask"></div>
            <div class="row-tool" style="display: none;">
              <div class="row-handle"><i class="icon-move"></i></div>
              <div class="row-copy"><i class="icon-plus"></i></div>
              <div class="row-remove"><i class="icon-remove"></i></div>
            </div>
          </section>`},
          {dataSnipid:4,formContent:`<section class="ui-draggable" data-snipid="4" v-bind:data-index="dataIndex">
            <div>
              <div class="form-horizontal">
                <div class="form-group">
                  <label class="col-sm-3 control-label">${this.originFormData[4].title}</label>
                  <div class="col-sm-8">
                    <input type="text" class="form-control" ztype="time" name="jqrnfa1tyyt4" verify="Time">
                    <p class="help-block">${this.originFormData[4].info}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row-mask"></div>
            <div class="row-tool" style="display: none;">
              <div class="row-handle"><i class="icon-move"></i></div>
              <div class="row-copy"><i class="icon-plus"></i></div>
              <div class="row-remove"><i class="icon-remove"></i></div>
            </div>
          </section>`},
          {dataSnipid:5,formContent:`<section class="ui-draggable" data-snipid="5" v-bind:data-index="dataIndex">
            <div>
              <div class="form-horizontal">
                <div class="form-group">
                  <label class="col-sm-3 control-label">${this.originFormData[5].title}</label>
                  <div class="col-sm-8">
                    <div class="input-group">
                      <span class="input-group-addon">^_^</span>
                      <input type="text" class="form-control" name="jqrnfa1t7841" placeholder="placeholder" verify="">
                    </div>
                    <p class="help-block">${this.originFormData[5].info}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row-mask"></div>
            <div class="row-tool" style="display: none;">
              <div class="row-handle"><i class="icon-move"></i></div>
              <div class="row-copy"><i class="icon-plus"></i></div>
              <div class="row-remove"><i class="icon-remove"></i></div>
            </div>
          </section>`},
          {dataSnipid:6,formContent:`<section class="ui-draggable" data-snipid="6" v-bind:data-index="dataIndex">
            <div>
              <div class="form-horizontal">
                <div class="form-group">
                  <label class="col-sm-3 control-label">${this.originFormData[6].title}</label>
                  <div class="col-sm-8">
                    <div class="input-group">
                      <input type="text" class="form-control" name="jqrnfa1tw073" placeholder="placeholder" verify="">
                      <span class="input-group-addon">^_^</span>
                    </div>
                    <p class="help-block">${this.originFormData[6].info}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row-mask"></div>
            <div class="row-tool" style="display: none;">
              <div class="row-handle"><i class="icon-move"></i></div>
              <div class="row-copy"><i class="icon-plus"></i></div>
              <div class="row-remove"><i class="icon-remove"></i></div>
            </div>
          </section>`},
          {dataSnipid:7,formContent:`<section class="ui-draggable" data-snipid="7" v-bind:data-index="dataIndex">
            <div>
              <div class="form-horizontal">
                <div class="form-group">
                  <label class="col-sm-3 control-label">${this.originFormData[8].title}</label>
                  <div class="col-sm-8">
                    <div class="textarea">
                      <textarea rows="4" class="form-control" name="jqrnfa1taiuf" maxlength="140" verify="Length&lt;=140" placeholder="placeholder"></textarea>
                      <p class="help-block">${this.originFormData[8].info}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row-mask"></div>
            <div class="row-tool" style="display: none;">
              <div class="row-handle"><i class="icon-move"></i></div>
              <div class="row-copy"><i class="icon-plus"></i></div>
              <div class="row-remove"><i class="icon-remove"></i></div>
            </div>
          </section>`},
          {dataSnipid:8,formContent:`<section class="ui-draggable" data-snipid="8" v-bind:data-index="dataIndex">
            <div>
              <div class="form-horizontal">
                <div class="form-group">
                  <label class="col-sm-3 control-label">${this.originFormData[7].title}</label>
                  <div class="col-sm-8">
                    <select class="form-control" name="jqrnfa1tjanj">
                      <option value="Enter">Enter</option>
                      <option value="Your">Your</option>
                      <option value="Options">Options</option>
                      <option value="Here!">Here!</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="row-mask"></div>
            <div class="row-tool" style="display: none;">
              <div class="row-handle"><i class="icon-move"></i></div>
              <div class="row-copy"><i class="icon-plus"></i></div>
              <div class="row-remove"><i class="icon-remove"></i></div>
            </div>
          </section>`},
          {dataSnipid:9,formContent:`<section class="ui-draggable" data-snipid="9" v-bind:data-index="dataIndex">
            <div config="el">
              <div class="form-horizontal">
                <div class="form-group">
                  <label class="col-sm-3 control-label">${this.originFormData[9].title}</label>
                  <div class="col-sm-8">
                    <div class="form-group">
                      <div class="col-sm-4">
                        <select class="form-control" name="provincesih62q5uneeee">
                          <option value="">请选择</option>
                          <option value="1"> 北京市 </option>
                          <option value="2"> 天津市 </option>
                          <option value="3"> 河北省 </option>
                          <option value="4"> 山西省 </option>
                          <option value="5"> 内蒙古自治区 </option>
                          <option value="6"> 辽宁省 </option>
                          <option value="7"> 吉林省 </option>
                          <option value="8"> 黑龙江省 </option>
                          <option value="9"> 上海市 </option>
                          <option value="10"> 江苏省 </option>
                          <option value="11"> 浙江省 </option>
                          <option value="12"> 安徽省 </option>
                          <option value="13"> 福建省 </option>
                          <option value="14"> 江西省 </option>
                          <option value="15"> 山东省 </option>
                          <option value="16"> 河南省 </option>
                          <option value="17"> 湖北省 </option>
                          <option value="18"> 湖南省 </option>
                          <option value="19"> 广东省 </option>
                          <option value="20"> 广西壮族自治区 </option>
                          <option value="21"> 海南省 </option>
                          <option value="22"> 重庆市 </option>
                          <option value="23"> 四川省 </option>
                          <option value="24"> 贵州省 </option>
                          <option value="25"> 云南省 </option>
                          <option value="26"> 西藏自治区 </option>
                          <option value="27"> 陕西省 </option>
                          <option value="28"> 甘肃省 </option>
                          <option value="29"> 青海省 </option>
                          <option value="30"> 宁夏回族自治区 </option>
                          <option value="31"> 新疆维吾尔自治区 </option>
                          <option value="32"> 香港特别行政区 </option>
                          <option value="33"> 澳门特别行政区 </option>
                          <option value="34"> 台湾 </option>
                          <option value="35"> 海外 </option>
                        </select>
                      </div>
                      <div class="col-sm-4">
                        <select class="form-control" name="citiesih62q5uneeee">
                          <option value="">请选择</option>
                        </select>
                      </div>
                      <div class="col-sm-4">
                        <select class="form-control" name="districtsih62q5uneeee">
                          <option value="">请选择</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <input type="text" class="form-control" name="ih62q5uneeee" verify="">
                      <p class="help-block"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row-mask"></div>
            <div class="row-tool" style="display: none;">
              <div class="row-handle"><i class="icon-move"></i></div>
              <div class="row-copy"><i class="icon-plus"></i></div>
              <div class="row-remove"><i class="icon-remove"></i></div>
            </div>
          </section>`},
          {dataSnipid:10,formContent:`<section class="ui-draggable" data-snipid="10" v-bind:data-index="dataIndex">
          <div>
            <div class="form-horizontal">
              <div class="form-group">
                <label class="col-sm-3 control-label">${this.originFormData[10].title}</label>
                <div class="col-sm-8">
                  <select class="form-control" multiple="multiple" name="jqrnfa1tuyir">
                    <option value="Enter">Enter</option>
                    <option value="Your">Your</option>
                    <option value="Options">Options</option>
                    <option value="Here!">Here!</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="row-mask"></div>
          <div class="row-tool" style="display: none;">
            <div class="row-handle"><i class="icon-move"></i></div>
            <div class="row-copy"><i class="icon-plus"></i></div>
            <div class="row-remove"><i class="icon-remove"></i></div>
          </div>
        </section>`},
          {dataSnipid:11,formContent:`<section class="ui-draggable" data-snipid="11" v-bind:data-index="dataIndex">
            <div>
              <div class="form-horizontal">
                <div class="form-group">
                  <label class="col-sm-3 control-label">${this.originFormData[11].title}</label>
                  <div class="col-sm-8">
                    <div class="checkbox">
                      <label><input type="checkbox" name="jqrnfa1tqu4t" value="Option one">
                        Option one
                      </label>
                    </div>
                    <div class="checkbox">
                      <label><input type="checkbox" name="jqrnfa1tqu4t" value="Option two">
                        Option two
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row-mask"></div>
            <div class="row-tool" style="display: none;">
              <div class="row-handle"><i class="icon-move"></i></div>
              <div class="row-copy"><i class="icon-plus"></i></div>
              <div class="row-remove"><i class="icon-remove"></i></div>
            </div>
          </section>`},
          {dataSnipid:12,formContent:`<section class="ui-draggable" data-snipid="12" v-bind:data-index="dataIndex">
            <div>
              <div class="form-horizontal">
                <div class="form-group">
                  <label class="col-sm-3 control-label">${this.originFormData[12].title}</label>
                  <div class="col-sm-8">
                    <div class="radio">
                      <label><input type="radio" value="Option one" name="jqrnfa1tfhis">
                        Option one
                      </label>
                    </div>
                    <div class="radio">
                      <label><input type="radio" value="Option two" name="jqrnfa1tfhis">
                        Option two
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row-mask"></div>
            <div class="row-tool" style="display: none;">
              <div class="row-handle"><i class="icon-move"></i></div>
              <div class="row-copy"><i class="icon-plus"></i></div>
              <div class="row-remove"><i class="icon-remove"></i></div>
            </div>
          </section>`},
          {dataSnipid:13,formContent:`<section class="ui-draggable" data-snipid="13" v-bind:data-index="dataIndex">
            <div>
              <div class="form-horizontal">
                <div class="form-group">
                  <label class="col-sm-3 control-label">${this.originFormData[13].title}</label>
                  <div class="col-sm-8">
                    <label class="checkbox-inline">
                      <input type="checkbox" name="jqrnfa1t3l32" value="one">
                      one
                    </label>
                    <label class="checkbox-inline">
                      <input type="checkbox" name="jqrnfa1t3l32" value="two">
                      two
                    </label>
                    <label class="checkbox-inline">
                      <input type="checkbox" name="jqrnfa1t3l32" value="three">
                      three
                    </label>
                  </div>
                </div>
              </div>

            </div>
            <div class="row-mask"></div>
            <div class="row-tool" style="display: none;">
              <div class="row-handle"><i class="icon-move"></i></div>
              <div class="row-copy"><i class="icon-plus"></i></div>
              <div class="row-remove"><i class="icon-remove"></i></div>
            </div>
          </section>`},
          {dataSnipid:14,formContent:`<section class="ui-draggable" data-snipid="14" v-bind:data-index="dataIndex">
            <div>
              <div class="form-horizontal">
                <div class="form-group">
                  <label class="col-sm-3 control-label">${this.originFormData[14].title}</label>
                  <div class="col-sm-8">
                    <label class="radio-inline">
                      <input type="radio" value="one" name="jqrnfa1t16ho">
                      one
                    </label><label class="radio-inline">
                    <input type="radio" value="two" name="jqrnfa1t16ho">
                    two
                  </label><label class="radio-inline">
                    <input type="radio" value="three" name="jqrnfa1t16ho">
                    three
                  </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="row-mask"></div>
            <div class="row-tool" style="display: none;">
              <div class="row-handle"><i class="icon-move"></i></div>
              <div class="row-copy"><i class="icon-plus"></i></div>
              <div class="row-remove"><i class="icon-remove"></i></div>
            </div>
          </section>`},
          {dataSnipid:15,formContent:`<section class="ui-draggable" data-snipid="15" v-bind:data-index="dataIndex">
            <div config="el">
              <div class="form-horizontal">
                <div class="form-group">
                  <label class="col-sm-3 control-label">${this.originFormData[15].title}</label>
                  <div class="col-sm-8">
                    <ul class="star-rating" id="rating1">
                      <input type="hidden" name="ih62q5unffff" value="0">
                      <li>☆☆☆☆☆<a href="#" class="star-clear" data-rate="0">×</a></li>
                      <li class="current-rating" style="width: 0em;">★★★★★</li>
                      <li><a href="#" style="width:5em;" data-rate="5">★★★★★</a></li>
                      <li><a href="#" style="width:4em;" data-rate="4">★★★★</a></li>
                      <li><a href="#" style="width:3em;" data-rate="3">★★★</a></li>
                      <li><a href="#" style="width:2em;" data-rate="2">★★</a></li>
                      <li><a href="#" style="width:1em;" data-rate="1">★</a></li>
                    </ul>
                    <p class="help-block">${this.originFormData[15].info}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row-mask"></div>
            <div class="row-tool" style="display: none;">
              <div class="row-handle"><i class="icon-move"></i></div>
              <div class="row-copy"><i class="icon-plus"></i></div>
              <div class="row-remove"><i class="icon-remove"></i></div>
            </div>
          </section>`},
          {dataSnipid:16,formContent:`<section class="ui-draggable" data-snipid="16" v-bind:data-index="dataIndex">
            <div>
              <div class="form-horizontal">
                <div class="form-group">
                  <label class="col-sm-3 control-label">${this.originFormData[16].title}</label>
                  <div class="col-sm-8">
                    <input class="input-file" type="file" name="jqrnfa1tiku8">
                    <p class="help-block">${this.originFormData[16].info}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row-mask"></div>
            <div class="row-tool" style="display: none;">
              <div class="row-handle"><i class="icon-move"></i></div>
              <div class="row-copy"><i class="icon-plus"></i></div>
              <div class="row-remove"><i class="icon-remove"></i></div>
            </div>

          </section>`},
          {dataSnipid:17,formContent:`<section class="ui-draggable" data-snipid="17" v-bind:data-index="dataIndex">
            <div>
              <div class="form-horizontal">
                <div class="form-group">
                  <label class="col-sm-3 control-label">${this.originFormData[17].title}</label>
                  <div class="col-sm-8">
                    <button class="btn btn-primary">${this.originFormData[17].info}</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="row-mask"></div>
            <div class="row-tool" style="display: none;">
              <div class="row-handle"><i class="icon-move"></i></div>
              <div class="row-copy"><i class="icon-plus"></i></div>
              <div class="row-remove"><i class="icon-remove"></i></div>
            </div>
          </section>`},
        ]
      },
      // 4、收起右面版
      extendLeftOrRight(){
        // alert(11)
      }

    },
    created:function(){
      this.initUserForm();
    },
    methods:{

      // 1、初始化用户form
      initUserForm(){
        // 1.1、初始化用户的form控件
        this.userFormEles = this.originFormEles.slice(0,18);
        // 1.2、初始化用户的form数据
        this.userFormData = this.originFormData;
        console.log('初始化用户的form数据',this.userFormData);
      },
      // 2、点击单个form
      hoverclick(cur,event){
        let eledom   = event.target;
        this.curIndex = eledom.parentNode.getAttribute('data-snipid');
        //console.log('this.curIndex',this.curIndex);
        // 添加样式
        this.cur = cur;
        //console.log('event事件1',event);
        //console.log('cur的值',this.cur);
        this.operateForm(event);
      },
      // 3、操作form,添加或删除(采用事件委托)
      operateForm (e){
        //console.log('e事件2',e);
        let dom = e.target;
        // 3.1、添加form
        if(dom.getAttribute('class')==='icon-plus'){
          this.userFormEles.splice(this.cur,0,this.userFormEles[this.cur]);
          // console.log('添加'+this.cur)
          // 同时更新用户的form数据
          this.userFormData.splice(this.cur,0,this.userFormData[this.cur]);
          console.log('添加form之后的form数据',this.userFormData)
        }
        // 3.2、删除form
        if(dom.getAttribute('class')==='icon-remove'){
          this.userFormEles.splice(this.cur,1);
          // console.log('删除了')
        }
      },
      // 4、子组件触发的父组件的事件：向父组件中拖入form
      receive(leftIndex,futureIndex){
         //alert(leftIndex,futureIndex);
        // 修改form控件
        this.userFormEles.splice(futureIndex,0,this.originFormEles[leftIndex]);
        // 修改原始数据
        console.log()
      },
      // last、收起右面板
      pullAwayRight(){
        this.isPullAway = !this.isPullAway;
      }
    }
  }
</script>

<style lang="less" scoped>
  .extendLeft{
    margin-left: 12px;
  }
  .extendRight{
    margin-right: 12px;
  }
  .isPullAwayClass{
    right: -244px;
  }

</style>
