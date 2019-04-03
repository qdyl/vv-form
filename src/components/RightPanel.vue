<template>
  <div class="tool-panel-right" :class="{isPullAwayClass:isPullAway}">
    <a class="panel-open-btn-right" href="javascript:void(0);">
      <i class="glyphicon glyphicon-menu-right" @click="pullAwayRight"></i></a>

    <dl class="accordionPanel">
      <dt class="accordionPanelTab"><b>属性</b></dt>
      <dd class="accordionPanelContent">
        <!-- 属性 -->
        <div id="fieldEditors" avalonctrl="fieldEditors" style="height: 658px;">

          <div class="form-group" style="">
            <label class="control-label">标题: </label>
            <input type="text" class="form-control input-sm">
          </div>

          <div class="form-group" style="display: none;">
            <label class="control-label">: </label>
            <input type="text" class="form-control input-sm">
          </div>

          <div class="form-group" style="display: none;">
            <label class="control-label">: </label>
            <input type="text" class="form-control input-sm">
          </div>

          <div class="form-group" style="">
            <label class="control-label">填写帮助: </label>
            <input type="text" class="form-control input-sm">
          </div>

          <div class="form-group" style="display: none;">
            <label class="control-label">: </label>
            <textarea class="form-control" style="min-height: 100px"></textarea>
          </div>

          <div class="form-group" style="display: none;">
            <label class="control-label">: </label>
            <input class="form-control input-sm" type="text">
            <label class="control-label">: </label>
            <select class="form-control input-sm">
              <option value="btn-default">Default</option>
              <option value="btn-primary">Primary</option>
              <option value="btn-info">Info</option>
              <option value="btn-success">Success</option>
              <option value="btn-warning">Warning</option>
              <option value="btn-danger">Danger</option>
            </select>
          </div>

          <div class="form-group" style="display: none;">
            <label class="control-label">: </label>
            <input type="text" class="form-control input-sm" verify="Int">
          </div>

          <div class="form-group checkbox" style="display: none;">
            <label><input type="checkbox" class="input-inline">: </label>
          </div>

          <div class="form-group checkbox" style="">
            <label><input type="checkbox" value="NotNull" class="input-inline">这是个必填项</label>
          </div>


        </div>

        <!-- /属性 -->
      </dd>
    </dl>

  </div>
</template>

<script>
  export default {
    name: "right",
    data(){
      return{
        isPullAway:false
      }
    },
    methods:{
      pullAwayRight(){
        this.isPullAway = !this.isPullAway;
      }
    }
  }
</script>

<style lang="less" scoped>
  .isPullAwayClass{
    right: -244px;
  }

</style>
