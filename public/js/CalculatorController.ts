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

        static  Add = 0;
        static  Sub = 1;
        static  Mult = 2;
        static  Div = 3;


        constructor () {
            this.title = 'Calculator Page';
            this.displayWindow = '';
            this.DisableOperators();
        }

        public selectNum (num){
            console.log("selectNum fired for " + num);

            if (this.solved) {
                this.displayWindow = num;
            }
            else {
                this.displayWindow += String(num);
            }
            this.solved = false;
            this.EnableOperators();
        }

        public operator (operation){
            console.log("operator fired for " + operation);

            if (this.operatorChosen) {
                this.doMath();
                this.input1 = this.answer;
            }
            else {
                this.input1 = parseInt(this.displayWindow);
            }
            this.displayWindow = " ";

            this.action = operation;
            this.operatorChosen = true;
            this.DisableOperators();
        }

        public clearDisplay (){
            console.log("clearDisplay fired");

            this.displayWindow = "";
            this.operatorChosen = false;
            this.solved = false;
        }

        public doMath () {
            let error = false;

            this.input2 = parseInt(this.displayWindow);

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
                this.DisableOperators();
            }
            else {
                this.displayWindow = this.answer;
            }
            

        }

        public solveEquation (){
            console.log("solveEquation fired");

            this.doMath();

            this.solved = true;
            this.operatorChosen = false;

        }

        public DisableOperators (){
            let buttons = document.getElementsByClassName("operator");
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].disabled = true;
            }
        }

        public EnableOperators (){
            let buttons = document.getElementsByClassName("operator");
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].disabled = false;
            }
        }
    }
}
