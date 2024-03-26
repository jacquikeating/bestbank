export const accounts = [
    {
        id: 1,
        title: "Main",
        balance: "6700.56",
        spendings: [
            {
                category: "Rent",
                spent: "1450"
            },
            {
                category: "Groceries",
                spent: "564"
            },
            {
                category: "Restaurants",
                spent: "123"
            },
            {
                category: "Transport",
                spent: "81"
            },
            {
                category: "Internet",
                spent: "50"
            },
        ],
        
        getPercentsArray: function() {
            let spendingsArray = []
            let percentsArray = []
            for (let i = 0; i < this.spendings.length; i++) {
                spendingsArray.push(Number(this.spendings[i].spent))
                percentsArray.push(Number(((Number(this.spendings[i].spent)) / Number(this.balance) * 100).toFixed(1)))
            }
            return percentsArray
        }
    },
        
        
    {
        id: 2,
        title: "Expenses",
        balance: "5134.63",
        spendings: [
            {
                category: "Netflix",
                spent: "19.99"
            },
            {
                category: "HBO Max",
                spent: "14.99"
            },
            {
                category: "Setapp",
                spent: "9.99"
            },
        ],
        getPercentsArray: function() {
            let spendingsArray = []
            let percentsArray = []
            for (let i = 0; i < this.spendings.length; i++) {
                spendingsArray.push(Number(this.spendings[i].spent))
                percentsArray.push(Number(((Number(this.spendings[i].spent)) / Number(this.balance) * 100).toFixed(2)))
            }
            return percentsArray
        },
    },
    
    
    {
        id: 3,
        title: "Savings",
        balance: "36500.12",
        spendings: []
    }
]