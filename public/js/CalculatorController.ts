namespace App {

    export class CalculatorController {
        static $inject = [];


        public title;
        public displayWindow;

        private input1;
        private input2;
        private action;
        private answer;
        private solved = false;

/*
        enum Actions {
            add,
            sub,
            mult,
            div
        }
*/
        private  Add = 0;
        private  Sub = 1;
        private  Mult = 2;
        private  Div = 3;


        constructor () {
            this.title = 'Calculator Page';
            this.displayWindow = '';
        }

        public selectNum1 (){
            console.log("selectNum1 fired");

            if (this.solved) {
                this.displayWindow = "1";
            }
            else {
                this.displayWindow += "1";
            }
            this.solved = false;
        }

        public selectNum2 (){
            console.log("selectNum2 fired");

            if (this.solved) {
                this.displayWindow = "2";
            }
            else {
                this.displayWindow += "2";
            }
            this.solved = false;

        }

        public selectNum3 (){
            console.log("selectNum3 fired");

            if (this.solved) {
                this.displayWindow = "3";
            }
            else {
                this.displayWindow += "3";
            }
            this.solved = false;
        }

        public selectNum4 (){
            console.log("selectNum4 fired");

            if (this.solved) {
                this.displayWindow = "4";
            }
            else {
                this.displayWindow += "4";
            }
            this.solved = false;

        }

        public selectNum5 (){
            console.log("selectNum5 fired");

            if (this.solved) {
                this.displayWindow = "5";
            }
            else {
                this.displayWindow += "5";
            }
            this.solved = false;
        }

        public selectNum6 (){
            console.log("selectNum6 fired");

            if (this.solved) {
                this.displayWindow = "6";
            }
            else {
                this.displayWindow += "6";
            }
            this.solved = false;
        }

        public selectNum7 (){
            console.log("selectNum7 fired");

            if (this.solved) {
                this.displayWindow = "7";
            }
            else {
                this.displayWindow += "7";
            }
            this.solved = false;
        }

        public selectNum8 (){
            console.log("selectNum8 fired");

            if (this.solved) {
                this.displayWindow = "8";
            }
            else {
                this.displayWindow += "8";
            }
            this.solved = false;
        }

        public selectNum9 (){
            console.log("selectNum9 fired");

            if (this.solved) {
                this.displayWindow = "9";
            }
            else {
                this.displayWindow += "9";
            }
            this.solved = false;
        }

        public selectNum0 (){
            console.log("selectNum0 fired");

            if (this.solved) {
                this.displayWindow = "0";
            }
            else {
                this.displayWindow += "0";
            }
            this.solved = false;
        }

        public clearDisplay (){
            console.log("clearDisplay fired");

            this.displayWindow = "";
        }

        public solveEquation (){
            console.log("solveEquation fired");

            this.input2 = parseInt(this.displayWindow);

            this.displayWindow = "";

            if (this.action == this.Add) {
                this.answer = this.input1 + this.input2;
            }
            else if (this.action == this.Sub) {
                this.answer = this.input1 - this.input2;
            }
            else if (this.action == this.Mult) {
                this.answer = this.input1 * this.input2;
            }
            else if (this.action == this.Div) {
                if (this.input2 == 0){
                    this.displayWindow = 'Cannot divide by zero';
                }
                else {
                    this.answer = this.input1 / this.input2;
                }
            }

            this.displayWindow = this.answer;
            this.solved = true;

        }

        public add (){
            console.log("add fired");

            this.input1 = parseInt(this.displayWindow);
            this.displayWindow = " ";

            this.action = this.Add;
        }

        public subtract (){
            console.log("subtract fired");
            this.input1 = parseInt(this.displayWindow);
            this.displayWindow = " ";

            this.action = this.Sub;
        }

        public multiply (){
            console.log("multiply fired");
            this.input1 = parseInt(this.displayWindow);
            this.displayWindow = " ";

            this.action = this.Mult;
        }

        public divide (){
            console.log("divide fired");
            this.input1 = parseInt(this.displayWindow);
            this.displayWindow = " ";

            this.action = this.Div;
        }

    }


}
