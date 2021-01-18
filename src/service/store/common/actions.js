export default {
  getUserInfo({
    commit
  }) {
    console.log('调用action')
    let url = "user/GetUserInfo.do";
    this._vm.$ajax.get(url, {
      params: {}
    }).then(
      ({
        data
      }) => {
        commit('SET_USER_INFO', data.result)
      }
    );
  }
}
