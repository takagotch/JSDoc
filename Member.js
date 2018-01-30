/**
 * @constructor
 * @classdesc
 * @params {string} firstName
 * @throw {string}  lastName
 * @author {Error} 
 * @author tk
 * @version 1.0.0
 */
var Member = function(firstName, lastName){
  if(firstName === undefined || lastName === undefined){
    throw new Error('EER');
  }
  this.firstName = firstName;
  this.lastName  = lastName;

};

/**
 * @return {String}
 * @deprecated {@link Member#toString}
 */
Member.protype.getName = function(){
  return this.lastName + ' ' + this.firstName;
};

/**
 * @return {sting}
 */
Member.prototype.toString = function(){
  return this.lastName + ' ' + this.firstName;
};

