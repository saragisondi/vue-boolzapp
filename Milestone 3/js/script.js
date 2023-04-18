const {createApp} = Vue;

createApp({
  data(){
    return{
      contacts:[
        {
          name:'Michele',
          avatar:'img/avatar_1.jpg',
          visible:true,
          messages:[
            {
              date:'18/04/2023 10:35:55',
              message:'Ciao',
              status:'sent'
            },
            {
              date:'18/04/2023 10:35:55',
              message:'Ciao come va?',
              status:'received'
            },
            {
              date:'18/04/2023 10:35:55',
              message:'tutto bene, grazie',
              status:'sent'
            },
          ]
        },
          {
          name:'Fabio',
          avatar:'img/avatar_2.jpg',
          visible:true,
          messages:[
            {
              date:'18/04/2023 10:35:55',
              message:'Hai portato fuori il cane?',
              status:'sent'
            },
            {
              date:'18/04/2023 10:35:55',
              message:'Si si',
              status:'received'
            },
          ]
        },
          {
          name:'Samuele',
          avatar:'img/avatar_3.jpg',
          visible:true,
          messages:[
            {
              date:'18/04/2023 10:35:55',
              message:'Hai fatto la spesa?',
              status:'sent'
            },
            {
              date:'18/04/2023 10:35:55',
              message:'No, non sono ancora andato',
              status:'received'
            },
            {
              date:'18/04/2023 10:35:55',
              message:'Dimmi se riesci, altrimenti vado io',
              status:'sent'
            },
          ]
        },
          {
          name:'Alessandro B.',
          avatar:'img/avatar_4.jpg',
          visible:true,
          messages:[
            {
              date:'18/04/2023 10:35:55',
              message:'Ciao',
              status:'sent'
            },
            {
              date:'18/04/2023 10:35:55',
              message:'Ciao',
              status:'received'
            },
          ]
        },
          {
          name:'Alessandro L.',
          avatar:'img/avatar_5.jpg',
          visible:true,
          messages:[
            {
              date:'18/04/2023 10:35:55',
              message:'Ciao come va?',
              status:'sent'
            },
            {
              date:'18/04/2023 10:35:55',
              message:'tutto bene, tu?',
              status:'received'
            },
            {
              date:'18/04/2023 10:35:55',
              message:'tutto bene',
              status:'sent'
            },
          ]
        },
          {
          name:'Claudia',
          avatar:'img/avatar_6.jpg',
          visible:true,
          messages:[
            {
              date:'18/04/2023 10:35:55',
              message:'Ho provato a chiamarti ma non hai risposto',
              status:'sent'
            },
            {
              date:'18/04/2023 10:35:55',
              message:'Scusa, non avevo visto',
              status:'received'
            },
            {
              date:'18/04/2023 10:35:55',
              message:'Ti richiamo',
              status:'sent'
            },
          ]
        },
          {
          name:'Federico',
          avatar:'img/avatar_7.jpg',
          visible:true,
          messages:[
            {
              date:'18/04/2023 10:35:55',
              message:'ehi ci sei?',
              status:'sent'
            },
            {
              date:'18/04/2023 10:35:55',
              message:'si perché?',
              status:'received'
            },
            {
              date:'18/04/2023 10:35:55',
              message:'chiamami!',
              status:'sent'
            },
          ]
        },
          {
          name:'Michele',
          avatar:'img/avatar_8.jpg',
          visible:true,
          messages:[
            {
              date:'18/04/2023 10:35:55',
              message:'Ci sei stasera a cena?',
              status:'sent'
            },
            {
              date:'18/04/2023 10:35:55',
              message:'Non lo so ',
              status:'received'
            },
            {
              date:'18/04/2023 10:35:55',
              message:'Fammi sapere',
              status:'sent'
            },
          ]
        },
      ],
      counter:0,
      myMessage:"",
    }
  },

methods:{
  contactClicked(index){
    this.counter = index;
  },

  newMySms(){
    const myNewSms ={
      message: this.myMessage,
      status: 'sent'
    }
    console.log(myNewSms)

    this.contacts.push(myNewSms)

    this.myMessage="";
  }
}

}).mount('#app')