var app = new Vue({
  el: '#app',
  data: {
    listaEmails: [],
    email: '',
    contador: 0,
    message: 'Hola Vue!',
    mostrarBoton: false,
    codigoHtml: '<h1>Título de página</h1>',
    estaChequeado: false,
    listaDeElementos: []
  },
  methods: {
    mostrarTextoEnConsola: function() {
      console.log("TEXTO EN CONSOLA");
    },
    enviar: function() {
      alert("Estamos enviando");
    },
    agregarEmail: function() {
      const infoDeEmail = {
        email: this.email,
        check: false,
        show: true
      }
      this.listaEmails.push(infoDeEmail);
      this.email = "";
    },
    eliminarEmail: function() {
      for(let item of this.listaEmails) {
        if(item.check) {
          item.show = false;
        }
      }
    },
    limpiarListaEmail: function() {
      this.listaEmails = [];
    },
    obtenerEmailsVisibles: function() {
      const listaVisible = [];
      for (let item of this.listaEmails) {
        if (item.show) {
          listaVisible.push(item);
        }
      }
      return listaVisible;
      // return this.listaEmails.filter((item) => item.show);
    }
  }
})

setTimeout(()=> {
  app.codigoHtml = '<h3>No te duermas</h3>'
}, 2000);

setTimeout(()=> {
  app.codigoHtml = '<h1>Título de página</h1>'
}, 4000);

// const listaDeElementos = [];
// app.listaDeElementos.push('Argentina');
// app.listaDeElementos.push('Brasil');
// app.listaDeElementos.push('Uruguay');
app.listaDeElementos.push({id: 54, texto: "Argentina", aclaracion: "Argentino", codigoArea: "+54"})
app.listaDeElementos.push({id: 598, texto: "Uruguay", aclaracion: "Uruguayo", codigoArea: "+598"})
app.listaDeElementos.push({id: 55, texto: "Brasil", aclaracion: "Brasileño", codigoArea: "+55"})

app.listaDeElementos = app.listaDeElementos.map(item => {
  return ({...item, enable: (item.texto === "Brasil") ? false : true});
})

for(let index in app.listaDeElementos) {
  console.log(index, app.listaDeElementos[index]);
}

for(let item of app.listaDeElementos) {
  console.log(item);
}