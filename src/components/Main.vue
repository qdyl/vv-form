<template>
  <div>
    <!-- 左-->
    <left-panel></left-panel>
    <!-- 中-->
    <div id="bodyOfPage" class="body-of-page" :class="extendLeftOrRight">
    <!--  <div avalonctrl="contentArea">
        &lt;!&ndash;表单&ndash;&gt;
        <ul id="contentarea" class="contentarea ui-droppable ui-sortable">
          &lt;!&ndash; 1&ndash;&gt;
          <li class="ui-draggable" data-snipid="0" v-bind:data-index="dataIndex">
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
          </li>
          &lt;!&ndash; 2&ndash;&gt;
          <li class="ui-draggable" data-snipid="1" v-bind:data-index="dataIndex">
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
          </li>
          &lt;!&ndash; 3&ndash;&gt;
          <li class="ui-draggable" data-snipid="2" v-bind:data-index="dataIndex">
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
          </li>
          &lt;!&ndash; 4&ndash;&gt;
          <li class="ui-draggable ui-dragbox-outlined" data-snipid="3" v-bind:data-index="dataIndex">
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
            <div class="row-tool" style="display: block;">
              <div class="row-handle"><i class="icon-move"></i></div>
              <div class="row-copy"><i class="icon-plus"></i></div>
              <div class="row-remove"><i class="icon-remove"></i></div>
            </div>
          </li>
          &lt;!&ndash; 5&ndash;&gt;
          <li class="ui-draggable" data-snipid="4" v-bind:data-index="dataIndex">
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
          </li>
          &lt;!&ndash; 6&ndash;&gt;
          <li class="ui-draggable" data-snipid="5" v-bind:data-index="dataIndex">
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
          </li>
          &lt;!&ndash; 7&ndash;&gt;
          <li class="ui-draggable" data-snipid="6" v-bind:data-index="dataIndex">
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
          </li>
          &lt;!&ndash; 8&ndash;&gt;
          <li class="ui-draggable" data-snipid="8" v-bind:data-index="dataIndex">
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
          </li>
          &lt;!&ndash; 9&ndash;&gt;
          <li class="ui-draggable" data-snipid="7" v-bind:data-index="dataIndex">
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
          </li>
          &lt;!&ndash; 10&ndash;&gt;
          <li class="ui-draggable" data-snipid="9" v-bind:data-index="dataIndex">
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
          </li>
          &lt;!&ndash; 11&ndash;&gt;
          <li class="ui-draggable" data-snipid="10" v-bind:data-index="dataIndex">
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
        </li>
          &lt;!&ndash; 12&ndash;&gt;
          <li class="ui-draggable" data-snipid="11" v-bind:data-index="dataIndex">
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
          </li>
          &lt;!&ndash; 13&ndash;&gt;
          <li class="ui-draggable" data-snipid="12" v-bind:data-index="dataIndex">
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
          </li>
          &lt;!&ndash; 14&ndash;&gt;
          <li class="ui-draggable" data-snipid="13" v-bind:data-index="dataIndex">
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
          </li>
          &lt;!&ndash; 15&ndash;&gt;
          <li class="ui-draggable" data-snipid="14" v-bind:data-index="dataIndex">
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
          </li>
          &lt;!&ndash; 16&ndash;&gt;
          <li class="ui-draggable" data-snipid="15" v-bind:data-index="dataIndex">
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
          </li>
          &lt;!&ndash; 17&ndash;&gt;
          <li class="ui-draggable" data-snipid="16" v-bind:data-index="dataIndex">
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

          </li>
          &lt;!&ndash; 18&ndash;&gt;
          <li class="ui-draggable" data-snipid="17" v-bind:data-index="dataIndex">
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
          </li>
        </ul>
        &lt;!&ndash;提示&ndash;&gt;
        <p class="alert alert-warning alert-dismissible" role="alert" style="">
          <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
          从左侧拖拽组件创建表单或根据 <a href="formTemplate.html"><strong>模板</strong></a> 创建表单
        </p>
      </div>-->
      <!--  中2-->
      <div>
        <ul id="contentarea" class="contentarea ui-droppable ui-sortable">
          <draggable v-model="formbuilders">
            <transition-group>
              <li v-for="item in formbuilders" :key="item.dataSnipid">
                <div v-html="item.formContent"></div>
              </li>
            </transition-group>
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
        dataIndex:'11111',
        array:[1,2,3,4,5,6],
        formbuilders:[
          {dataSnipid:1,formContent:`<li class="ui-draggable" data-snipid="0" v-bind:data-index="dataIndex">
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
          </li>`},
          {dataSnipid:2,formContent:`<li class="ui-draggable" data-snipid="1" v-bind:data-index="dataIndex">
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
          </li>`},
          {dataSnipid:3,formContent:`<li class="ui-draggable" data-snipid="2" v-bind:data-index="dataIndex">
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
          </li>`},
          {dataSnipid:4,formContent:`<li class="ui-draggable ui-dragbox-outlined" data-snipid="3" v-bind:data-index="dataIndex">
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
            <div class="row-tool" style="display: block;">
              <div class="row-handle"><i class="icon-move"></i></div>
              <div class="row-copy"><i class="icon-plus"></i></div>
              <div class="row-remove"><i class="icon-remove"></i></div>
            </div>
          </li>`},
          {dataSnipid:5,formContent:`<li class="ui-draggable" data-snipid="4" v-bind:data-index="dataIndex">
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
          </li>`},
          {dataSnipid:6,formContent:`<li class="ui-draggable" data-snipid="5" v-bind:data-index="dataIndex">
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
          </li>`},
          {dataSnipid:7,formContent:`<li class="ui-draggable" data-snipid="6" v-bind:data-index="dataIndex">
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
          </li>`},
          {dataSnipid:8,formContent:`<li class="ui-draggable" data-snipid="8" v-bind:data-index="dataIndex">
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
          </li>`},
          {dataSnipid:9,formContent:`<li class="ui-draggable" data-snipid="7" v-bind:data-index="dataIndex">
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
          </li>`},
          {dataSnipid:10,formContent:`<li class="ui-draggable" data-snipid="9" v-bind:data-index="dataIndex">
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
          </li>`},
          {dataSnipid:11,formContent:`<li class="ui-draggable" data-snipid="10" v-bind:data-index="dataIndex">
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
        </li>`},
          {dataSnipid:12,formContent:`<li class="ui-draggable" data-snipid="11" v-bind:data-index="dataIndex">
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
          </li>`},
          {dataSnipid:13,formContent:`<li class="ui-draggable" data-snipid="12" v-bind:data-index="dataIndex">
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
          </li>`},
          {dataSnipid:14,formContent:`<li class="ui-draggable" data-snipid="13" v-bind:data-index="dataIndex">
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
          </li>`},
          {dataSnipid:15,formContent:`<li class="ui-draggable" data-snipid="14" v-bind:data-index="dataIndex">
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
          </li>`},
          {dataSnipid:16,formContent:`<li class="ui-draggable" data-snipid="15" v-bind:data-index="dataIndex">
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
          </li>`},
          {dataSnipid:17,formContent:`<li class="ui-draggable" data-snipid="16" v-bind:data-index="dataIndex">
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

          </li>`},
          {dataSnipid:18,formContent:`<li class="ui-draggable" data-snipid="17" v-bind:data-index="dataIndex">
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
          </li>`},
        ]


      }
    },
    computed:{
      extendLeftOrRight(){
        // alert(11)

      }
    },
    methods:{
      chooseListItem(){

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
