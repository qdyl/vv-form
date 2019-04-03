<template>
  <div>
    <!-- 左-->
    <left-panel></left-panel>
    <!-- 中2-->
    <div id="bodyOfPage" class="body-of-page" :class="extendLeftOrRight">
      <div>
        <ul id="contentarea" class="contentarea ui-droppable ui-sortable">
          <draggable v-model="userFormEles" :options="mainOptions">
              <li v-for="(item,index) in userFormEles"
                  :key="item.dataSnipid"
                  v-html="item.formContent"
                  v-bind:class="{'ui-draggable':cur===index,'ui-dragbox-outlined':cur===index}"
                  @click="hoverclick(index,$event)">
              </li>
          </draggable>
        </ul>
      </div>
    </div>
    <!-- 右-->
    <right-panel></right-panel>
  </div>
</template>

<script>
  import Draggable from 'vuedraggable'
  import LeftPanel from './LeftPanel'
  import RightPanel from './RightPanel'
  export default {
    name: "main",
    components:{
      LeftPanel,
      RightPanel,
      Draggable
    },
    data(){
      return{
        cur:'',
        dataIndex:'11111',
        // 1、最原始的form表单控件
        originFormEles:[
          {dataSnipid:0,formContent:`<section class="ui-draggable" data-snipid="0" v-bind:data-index="dataIndex">
            <div config="el">
              <div class="form-horizontal clearfix">
                <h3>什么什么活动报名表</h3>
                <p class="help-block">请如实填写，如有弄虚作假取消参与资格。</p>
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
                  <label class="col-sm-3 control-label">Text input:</label>
                  <div class="col-sm-8">
                    <input type="text" class="form-control" name="jqrnfa1ogplx" placeholder="placeholder" verify="">
                    <p class="help-block">Supporting help text</p>
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
                  <label class="col-sm-3 control-label">Number input:</label>
                  <div class="col-sm-8">
                    <input type="text" class="form-control" ztype="number" name="jrizdgvzl5eg" verify="Int">
                    <p class="help-block">Supporting help text</p>
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
                  <label class="col-sm-3 control-label">生日</label>
                  <div class="col-sm-8">
                    <div class="input-group">
                      <input type="text" class="form-control" ztype="date" name="ih62q5uncccc" verify="Date&amp;&amp;NotNull">
                    </div>
                    <p class="help-block">不可虚报年龄</p>
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
                  <label class="col-sm-3 control-label">Time input:</label>
                  <div class="col-sm-8">
                    <input type="text" class="form-control" ztype="time" name="jqrnfa1tyyt4" verify="Time">
                    <p class="help-block">Supporting help text</p>
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
                  <label class="col-sm-3 control-label">Prepended text:</label>
                  <div class="col-sm-8">
                    <div class="input-group">
                      <span class="input-group-addon">^_^</span>
                      <input type="text" class="form-control" name="jqrnfa1t7841" placeholder="placeholder" verify="">
                    </div>
                    <p class="help-block">Supporting help text</p>
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
                  <label class="col-sm-3 control-label">Appended text:</label>
                  <div class="col-sm-8">
                    <div class="input-group">
                      <input type="text" class="form-control" name="jqrnfa1tw073" placeholder="placeholder" verify="">
                      <span class="input-group-addon">^_^</span>
                    </div>
                    <p class="help-block">Supporting help text</p>
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
          {dataSnipid:7,formContent:`<section class="ui-draggable" data-snipid="8" v-bind:data-index="dataIndex">
            <div>
              <div class="form-horizontal">
                <div class="form-group">
                  <label class="col-sm-3 control-label">Select - Basic:</label>
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
          {dataSnipid:8,formContent:`<section class="ui-draggable" data-snipid="7" v-bind:data-index="dataIndex">
            <div>
              <div class="form-horizontal">
                <div class="form-group">
                  <label class="col-sm-3 control-label">Textarea:</label>
                  <div class="col-sm-8">
                    <div class="textarea">
                      <textarea rows="4" class="form-control" name="jqrnfa1taiuf" maxlength="140" verify="Length&lt;=140" placeholder="placeholder"></textarea>
                      <p class="help-block">最多140个字</p>
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
          {dataSnipid:9,formContent:`<section class="ui-draggable" data-snipid="9" v-bind:data-index="dataIndex">
            <div config="el">
              <div class="form-horizontal">
                <div class="form-group">
                  <label class="col-sm-3 control-label">籍贯</label>
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
                <label class="col-sm-3 control-label">Select - Multiple:</label>
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
                  <label class="col-sm-3 control-label">Checkboxes:</label>
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
                  <label class="col-sm-3 control-label">Radio buttons:</label>
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
                  <label class="col-sm-3 control-label">Inline Checkboxes:</label>
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
                  <label class="col-sm-3 control-label">Inline radios:</label>
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
                  <label class="col-sm-3 control-label">星号评级乱入</label>
                  <div class="col-sm-8">
                    <ul class="star-rating" id="rating1">
                      <input type="hidden" name="ih62q5unffff" value="0">
                      <li>☆☆☆☆☆<a href="http://vuetest.demo.zhuzhilong.cn/formbuilder/formBuilder.html?template=0#" class="star-clear" data-rate="0">×</a></li>
                      <li class="current-rating" style="width: 0em;">★★★★★</li>
                      <li><a href="http://vuetest.demo.zhuzhilong.cn/formbuilder/formBuilder.html?template=0#" style="width:5em;" data-rate="5">★★★★★</a></li>
                      <li><a href="http://vuetest.demo.zhuzhilong.cn/formbuilder/formBuilder.html?template=0#" style="width:4em;" data-rate="4">★★★★</a></li>
                      <li><a href="http://vuetest.demo.zhuzhilong.cn/formbuilder/formBuilder.html?template=0#" style="width:3em;" data-rate="3">★★★</a></li>
                      <li><a href="http://vuetest.demo.zhuzhilong.cn/formbuilder/formBuilder.html?template=0#" style="width:2em;" data-rate="2">★★</a></li>
                      <li><a href="http://vuetest.demo.zhuzhilong.cn/formbuilder/formBuilder.html?template=0#" style="width:1em;" data-rate="1">★</a></li>
                    </ul>
                    <p class="help-block">零星视为无效评级</p>
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
                  <label class="col-sm-3 control-label">File Upload:</label>
                  <div class="col-sm-8">
                    <input class="input-file" type="file" name="jqrnfa1tiku8">
                    <p class="help-block">Supporting help text</p>
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
                  <label class="col-sm-3 control-label"></label>
                  <div class="col-sm-8">
                    <button class="btn btn-primary">Submit</button>
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
        ],
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
        this.userFormEles = this.originFormEles.slice(0,6)
      },
      // 2、点击单个form
      hoverclick(cur,event){
        // 添加样式
        this.cur = cur;
        console.log('event事件1',event);
        this.operateForm(event);
      },
      // 3、操作form,添加或删除(采用事件委托)
      operateForm (e){
        console.log('e事件2',e);
        let dom = e.target;
        if(dom.getAttribute('class')==='icon-plus'){
          this.userFormEles.splice(this.cur,0,this.userFormEles[this.cur]);
          console.log('添加'+this.cur)
        }
        if(dom.getAttribute('class')==='icon-remove'){
          this.userFormEles.splice(this.cur,1);
          console.log('删除了')
        }
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

</style>
