<template>
  <div class="select_people_box">
    <a-button type="primary" @click="showModal">
      选人
    </a-button>
    <a-modal
      ref="selectPeopleModal"
      :title="title"
      :visible="visible"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <!-- <p>{{ ModalText }}</p> -->
      <left-right-layout v-if="leftRight"></left-right-layout>
      <repeat-layout v-else-if="repeat"></repeat-layout>
    </a-modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import leftRightLayout from './components/leftRightLayout.vue'
import repeat from './components/repeatLayout.vue'

export default {
  name: "",
  components: {
    leftRightLayout,
    repeat,
  },
  data() {
    return {
      title: '选人/组织',
      visible: false,
      confirmLoading: false,
      ModalText: "Content of the modal",
    };
  },
  computed: {
    ...mapState('selectPeople', ['layout'])
  },
  watch: {},
  methods: {
    showModal() {
      this.visible = true;
      console.log('layout', this.layout)
    },
    handleOk() {
      this.ModalText = "The modal will be closed after two seconds";
      this.confirmLoading = true;
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
      }, 2000);
    },
    handleCancel() {
      console.log("Clicked cancel button");
      this.visible = false;
    },
    seletPeople () {
      console.log('hello selectPeople')
    }
  },
  mounted () {
  }
};
</script>

<style scoped lang="scss">
.select_people_box {
  padding: 20px;
}
</style>
