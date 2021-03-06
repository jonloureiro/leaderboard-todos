Meteor.methods({
  'verificationregister': function(code1){
    check(code1, String);
    if (Keys.find({code: code1}).count()){
      console.log('Código correto!')
      return true;
    }
    console.log('Código errado!')
    return false;
  },

  sendEmail(to, from, subject, text) {
    check([to, from, subject, text], [String]);
    this.unblock();
    Email.send({ to, from, subject, text });
  },
});
