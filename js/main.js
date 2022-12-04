const vm = new Vue({
  el: "#app",
  data: {
    activeModal: false,
    person: "",
    loader: true,
    info: {},
  },
  methods: {
    clickPerson(name) {
      this.person = name;
      this.searchPersonInformation();
    },
    searchPersonInformation() {
      var content = {};
      fetch("js/people.json")
        .then((response) => response.json())
        .then((json) => {
          content = json
        });

        setTimeout(()=>{
          content.map((e)=>{
            if(e.user == this.person){
              this.info = e;
              this.activeModal = true;
              return true;
            }
          })
        },100)
    },
  },
});
