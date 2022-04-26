const app = new Vue({
  el: "#app",
  data: {
    prodotti: [
      {
        id: 5,
        name: "frullatore",
        category: "Elettrodomestici",
        price: 35,
      },
      {
        id: 2,
        name: "televisore",
        category: "Elettrodomestici",
        price: 400,
      },
      {
        id: 1,
        name: "abito",
        category: "Abbigliamento",
        price: 35,
      },
    ],
    filtro:'',
    prodottiFiltrati:[]
    },

  methods: {
    filtra() {
      const prodottiFiltrati = this.prodotti.filter((item)=>{
        return item.name.includes(this.filtro);
      })
    },
  },
});
