namespace App {

    export class ContactController {
        static $inject = [];
        // Create our public variable that
        // will be useable outside of this object in
        // areas like our markup / template pages.
        public title;

        // Creat the constructor method that will run
        // once our object is created. We will use our
        // constructor functions to setup or configure
        // a new object.
        constructor () {
            this.title = 'Contact Page';
        }

        public testMethod (){
            this.title = "CONTACT PAGE";
        }

    }
}
