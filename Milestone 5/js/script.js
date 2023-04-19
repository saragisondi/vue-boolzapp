const {createApp} = Vue;

const dt = luxon.DateTime;

createApp({
  data(){
    return{
      contacts:[
        {
          name:'Michele',
          avatar:'img/avatar_1.jpg',
          messages:[
            {
              date:'18/04/2023',
              hour:'08:25',
              message:'Ciao Sara 😃',
              status:'sent'
            },
            {
              date:'18/04/2023',
              hour:'09:00',
              message:'Ciao Michele, come va?',
              status:'received'
            },
            {
              date:'18/04/2023',
              hour:'10:30',
              message:'tutto bene, grazie e te?',
              status:'sent'
            },
            {
              date:'18/04/2023',
              hour:'10:30',
              message:'tutto bene 🙂',
              status:'received'
            },
          ]
        },
          {
          name:'Mirko',
          avatar:'img/avatar_2.jpg',
          messages:[
            {
              date:'17/04/2023',
              hour:'07:15',
              message:'hai già portato fuori Nedo 🐶? ',
              status:'sent'
            },
            {
              date:'17/04/2023',
              hour:'08:00',
              message:'No, non ancora 😴',
              status:'received'
            },
            {
              date:'17/04/2023',
              hour:'08:02',
              message:'va bene dai, lo porto io 😘',
              status:'sent'
            },
            {
              date:'17/04/2023',
              hour:'08:03',
              message:'grazie mille!! ❤️',
              status:'received'
            },
          ]
        },
          {
          name:'Giovanni G.',
          avatar:'img/avatar_3.jpg',
          messages:[
            {
              date:'16/04/2023',
              hour:'7:30',
              message:'Ti va di venire in pizzeria con noi?',
              status:'received'
            },
            {
              date:'16/04/2023',
              hour:'10:00',
              message:'quale?',
              status:'sent'
            },
            {
              date:'16/04/2023',
              hour:'10:30',
              message:'Grano Vivo',
              status:'received'
            },
            {
              date:'16/04/2023',
              hour:'10:32',
              message:'allora vengo 😄',
              status:'sent'
            },
            {
              date:'16/04/2023',
              hour:'10:35',
              message:'Ce la fai per le 20:00?',
              status:'received'
            },
            {
              date:'16/04/2023',
              hour:'10:36',
              message:'si, certo! 😊',
              status:'sent'
            },
            {
              date:'16/04/2023',
              hour:'10:37',
              message:'ci vediamo li, non fare tardi!',
              status:'received'
            },
            {
              date:'16/04/2023',
              hour:'10:38',
              message:'va bene, a dopo!',
              status:'sent'
            },
          ]
        },
          {
          name:'Giovanni C.',
          avatar:'img/avatar_4.jpg',
          messages:[
            {
              date:'15/04/2023',
              hour:'09:45',
              message:'Ciao Giova, come stai?',
              status:'sent'
            },
            {
              date:'15/04/2023',
              hour:'09:47',
              message:'Ciao Sarina, tutto bene te?',
              status:'received'
            },
            {
              date:'15/04/2023',
              hour:'09:47',
              message:'Bene bene. Senti ho già chiesto anche a Laura, vi va di venire a cena? Serata Cinema 📽️',
              status:'sent'
            },
            {
              date:'15/04/2023',
              hour:'09:49',
              message:'Se sta bene a lei, per me non ci sono problemi',
              status:'received'
            },
          ]
        },
          {
          name:'Antonino',
          avatar:'img/avatar_5.jpg',
          messages:[
            {
              date:'14/04/2023',
              hour:'10:25',
              message:'Ciao Sara, Mirko è li?',
              status:'received'
            },
            {
              date:'14/04/2023',
              hour:'10:27',
              message:'No, è a lavoro',
              status:'sent'
            },
            {
              date:'14/04/2023',
              hour:'10:30',
              message:'ah, ok allora lo richiamo più tardi',
              status:'received'
            },
            {
              date:'14/04/2023',
              hour:'10:31',
              message:'👍',
              status:'sent'
            },
          ]
        },
          {
          name:'Laura',
          avatar:'img/avatar_6.jpg',
          messages:[
            {
              date:'13/04/2023',
              hour:'09:45',
              message:'Ho provato a chiamarti ma non hai risposto',
              status:'sent'
            },
            {
              date:'13/04/2023',
              hour:'10:05',
              message:'Scusa, non avevo visto',
              status:'received'
            },
            {
              date:'13/04/2023',
              hour:'10:08',
              message:'Ho chiesto a Giovanni per la serata cinema e a lui va bene, te allora che ne dici? venite?',
              status:'sent'
            },
            {
              date:'13/04/2023',
              hour:'10:09',
              message:'va bene, ma il film lo scelgo io! 🤪',
              status:'received'
            },
            {
              date:'13/04/2023',
              hour:'10:10',
              message:'va bene 😄',
              status:'sent'
            },
          ]
        },
          {
          name:'Nick',
          avatar:'img/avatar_7.jpg',
          messages:[
            {
              date:'12/04/2023',
              hour:'08:03',
              message:'ehi ci sei?',
              status:'received'
            },
            {
              date:'12/04/2023',
              hour:'08:30',
              message:'si perché?',
              status:'sent'
            },
            {
              date:'12/04/2023',
              hour:'09:36',
              message:'chiamami!',
              status:'received'
            },
            {
              date:'12/04/2023',
              hour:'09:36',
              message:'Ok 😧',
              status:'sent'
            },
          ]
        },
          {
          name:'Michele',
          avatar:'img/avatar_8.jpg',
          messages:[
            {
              date:'11/04/2023',
              hour:'06:55',
              message:'Ci sei sabato per un giretto sul mare? 😎',
              status:'sent'
            },
            {
              date:'11/04/2023',
              hour:'07:02',
              message:'Non lo so ',
              status:'received'
            },
            {
              date:'11/04/2023',
              hour:'07:05',
              message:'Ok, Fammi sapere',
              status:'sent'
            },
            {
              date:'11/04/2023',
              hour:'07:02',
              message:'Ok',
              status:'received'
            },
          ]
        },
      ],
      counter:0,
      myMessage:"",
      searchName:"",
      clock:"",
      day:"",
    }
  },

  computed: {
    searchContacts(){
      return this.contacts.filter(contact => {
        return contact.name.toLowerCase().includes(this.searchName.toLowerCase())
      })
    },
  },


methods:{
  contactClicked(index){
    this.counter = index;
  },

  newMySms(){
    
    if(this.myMessage.length === 0){
      
    }else{
      const myNewSms ={
        date:'18/04/2023',
        hour:'17:00',
        message: this.myMessage,
        status: 'sent'
      }
      this.contacts[this.counter].messages.push(myNewSms)
      this.answer()
      this.myMessage="";
    }
  },

  answer(){
    setTimeout(() => {

      const answer ={
        date:'18/04/2023',
        hour:'17:00',
        message: 'ok',
        status: 'received'
      }
      this.contacts[this.counter].messages.push(answer)

    },1000)

  },

  deleteMessage(counter){
    console.log(counter,this.messages)
    this.contacts[this.counter].messages.splice(counter,1);
  },

  printClock(){
    this.clock = dt.now().setLocale('it').toLocaleString(dt.TIME_24_SIMPLE);
},  

  },

  mounted() {
    this.printClock()
},  


}).mount('#app')