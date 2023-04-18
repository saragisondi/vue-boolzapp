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
              message:'Ciao come va?',
              status:'sent'
            }
          ]
        },
          {
          name:'Fabio',
          avatar:'img/avatar_2.jpg',
          visible:true,
          messages:[
            {
              date:'18/04/2023 10:35:55',
              message:'Ciao come va?',
              status:'sent'
            }
          ]
        },
          {
          name:'Samuele',
          avatar:'img/avatar_3.jpg',
          visible:true,
          messages:[
            {
              date:'18/04/2023 10:35:55',
              message:'Ciao come va?',
              status:'sent'
            }
          ]
        },
          {
          name:'Alessandro B.',
          avatar:'img/avatar_4.jpg',
          visible:true,
          messages:[
            {
              date:'18/04/2023 10:35:55',
              message:'Ciao come va?',
              status:'sent'
            }
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
            }
          ]
        },
          {
          name:'Claudia',
          avatar:'img/avatar_6.jpg',
          visible:true,
          messages:[
            {
              date:'18/04/2023 10:35:55',
              message:'Ciao come va?',
              status:'sent'
            }
          ]
        },
          {
          name:'Federico',
          avatar:'img/avatar_7.jpg',
          visible:true,
          messages:[
            {
              date:'18/04/2023 10:35:55',
              message:'Ciao come va?',
              status:'sent'
            }
          ]
        },
          {
          name:'Michele',
          avatar:'img/avatar_8.jpg',
          visible:true,
          messages:[
            {
              date:'18/04/2023 10:35:55',
              message:'Ciao come va?',
              status:'sent'
            }
          ]
        },
      ],
      myMessage:"",
    }
  },

methods:{
 
}

}).mount('#app')