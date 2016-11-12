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
        private operatorChosen = false;

/*
        enum Actions {
            add,
            sub,
            mult,
            div
        }
*/
        static  Add = 0;
        static  Sub = 1;
        static  Mult = 2;
        static  Div = 3;


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

            let error = false;

            this.input2 = parseInt(this.displayWindow);

            this.displayWindow = "";

            if (this.action == CalculatorController.Add) {
                this.answer = this.input1 + this.input2;
            }
            else if (this.action == CalculatorController.Sub) {
                this.answer = this.input1 - this.input2;
            }
            else if (this.action == CalculatorController.Mult) {
                this.answer = this.input1 * this.input2;
            }
            else if (this.action == CalculatorController.Div) {

                if (this.input2 == 0){
                    console.log ("Error: divide by zero attempted.");

                    error = true;
                }
                else {
                    this.answer = this.input1 / this.input2;
                }
            }

            if (error) {
                this.displayWindow = 'Cannot divide by zero';
            }
            else {
                this.displayWindow = this.answer;
            }

            this.solved = true;
            this.operatorChosen = false;

        }

        public add (){
            console.log("add fired");

            if (this.operatorChosen) {
                this.input2 = parseInt(this.displayWindow);
                this.input1 += this.input2;
            }
            else {
                this.input1 = parseInt(this.displayWindow);
            }
            this.displayWindow = " ";

            this.action = CalculatorController.Add;
            this.operatorChosen = true;
        }

        public subtract (){
            console.log("subtract fired");
            this.input1 = parseInt(this.displayWindow);
            this.displayWindow = " ";

            this.action = CalculatorController.Sub;
        }

        public multiply (){
            console.log("multiply fired");
            this.input1 = parseInt(this.displayWindow);
            this.displayWindow = " ";

            this.action = CalculatorController.Mult;
        }

        public divide (){
            console.log("divide fired");
            this.input1 = parseInt(this.displayWindow);
            this.displayWindow = " ";

            this.action = CalculatorController.Div;
        }

    }


}
