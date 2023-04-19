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
              message:'Ciao',
              status:'sent'
            },
            {
              date:'18/04/2023',
              hour:'09:00',
              message:'Ciao come va?',
              status:'received'
            },
            {
              date:'18/04/2023',
              hour:'10:30',
              message:'tutto bene, grazie',
              status:'sent'
            },
          ]
        },
          {
          name:'Fabio',
          avatar:'img/avatar_2.jpg',
          messages:[
            {
              date:'18/04/2023',
              hour:'07:15',
              message:'Hai portato fuori il cane?',
              status:'sent'
            },
            {
              date:'18/04/2023',
              hour:'08:00',
              message:'Si si',
              status:'received'
            },
          ]
        },
          {
          name:'Samuele',
          avatar:'img/avatar_3.jpg',
          messages:[
            {
              date:'18/04/2023',
              hour:'10:00',
              message:'Hai fatto la spesa?',
              status:'sent'
            },
            {
              date:'18/04/2023',
              hour:'10:30',
              message:'No, non sono ancora andato',
              status:'received'
            },
            {
              date:'18/04/2023',
              hour:'07:30',
              message:'Dimmi se riesci, altrimenti vado io',
              status:'sent'
            },
          ]
        },
          {
          name:'Alessandro B.',
          avatar:'img/avatar_4.jpg',
          messages:[
            {
              date:'18/04/2023',
              hour:'05:45',
              message:'Ciao',
              status:'sent'
            },
            {
              date:'18/04/2023',
              hour:'06:20',
              message:'Ciao',
              status:'received'
            },
          ]
        },
          {
          name:'Alessandro L.',
          avatar:'img/avatar_5.jpg',
          messages:[
            {
              date:'18/04/2023',
              hour:'11:25',
              message:'Ciao come va?',
              status:'sent'
            },
            {
              date:'18/04/2023',
              hour:'10:20',
              message:'tutto bene, tu?',
              status:'received'
            },
            {
              date:'18/04/2023',
              hour:'11:30',
              message:'tutto bene',
              status:'sent'
            },
          ]
        },
          {
          name:'Claudia',
          avatar:'img/avatar_6.jpg',
          messages:[
            {
              date:'18/04/2023',
              hour:'11:45',
              message:'Ho provato a chiamarti ma non hai risposto',
              status:'sent'
            },
            {
              date:'18/04/2023',
              hour:'10:05',
              message:'Scusa, non avevo visto',
              status:'received'
            },
            {
              date:'18/04/2023',
              hour:'09:15',
              message:'Ti richiamo',
              status:'sent'
            },
          ]
        },
          {
          name:'Federico',
          avatar:'img/avatar_7.jpg',
          messages:[
            {
              date:'18/04/2023',
              hour:'09:03',
              message:'ehi ci sei?',
              status:'sent'
            },
            {
              date:'18/04/2023',
              hour:'08:30',
              message:'si perché?',
              status:'received'
            },
            {
              date:'18/04/2023',
              hour:'08:36',
              message:'chiamami!',
              status:'sent'
            },
          ]
        },
          {
          name:'Michele',
          avatar:'img/avatar_8.jpg',
          messages:[
            {
              date:'18/04/2023',
              hour:'07:20',
              message:'Ci sei stasera a cena?',
              status:'sent'
            },
            {
              date:'18/04/2023',
              hour:'07:02',
              message:'Non lo so ',
              status:'received'
            },
            {
              date:'18/04/2023',
              hour:'06:55',
              message:'Fammi sapere',
              status:'sent'
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

  deleteMessage(index){
    this.messages.splice(index,1)
  },
    
  printClock(){
    this.clock = dt.now().setLocale('it').toLocaleString(dt.TIME_24_SIMPLE);
},  

  },

  mounted() {
    this.printClock()
},  



}).mount('#app')