// ELEMENT REFERENCES -----------------------------------------------------------
const mainAccount = document.getElementById("main-account")
const expensesAccount = document.getElementById("expenses-account")
const savingsAccount = document.getElementById("savings-account")
const allAccounts = [] // [mainAccount, expensesAccount, savingsAccount]
const accountsContainer = document.getElementById("all-accounts")
const spendingsData = document.getElementById("spendings-data")


// IMPORT DATA ------------------------------------------------------------------
import { accounts } from "./accounts.js"


// GLOBAL VARIABLES -------------------------------------------------------------
let selectedAccount


// FUNCTIONS -------------------------------------------------------------------
// 1) Visually render data from accounts array
function displayAccountInfo() {
    for (let i = 0; i < accounts.length; i++) {
        // Create element for each account
        let accountEl = document.createElement("div")
        accountEl.id = accounts[i].id
        accountEl.classList.add("account")
        accountsContainer.appendChild(accountEl)
        accountEl.innerHTML = `
            <p>${accounts[i].title}</p>
            <p>$${numberWithCommas(accounts[i].balance)}</p>
            `
        // Push to array for styling purposes
        allAccounts.push(accountEl)
    }
}

// 1b) Add commas to improve readability
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 2) Click an account to select it and show spendings
accountsContainer.addEventListener("click", function(e){
    // Call function to clear previous selected-account class
    clearSelectedAccountClasses()
    // Triggers when clicking the account div or the text inside it
    // Nothing happens when clicking container
    if (e.target.classList.contains("account")) {
        selectedAccount = e.target
    } else if (e.target.nodeName === "P") {
        selectedAccount = e.target.parentElement
    }
    selectedAccount.classList.add("selected-account")
    showSpendings(selectedAccount)
})

// 2b) Clear old selected-account class whenever a new account is selected
function clearSelectedAccountClasses() {
    for (let i = 0; i < allAccounts.length; i++) {
        if (allAccounts[i].classList.contains("selected-account")) {
            allAccounts[i].classList.remove("selected-account")
        }
    }
}

// 3) Clear spendings data and call appropriate function to render new data
function showSpendings(selectedAccount) {
    spendingsData.innerHTML = ""
    if (selectedAccount.id === "1") {
        populateSpendings(accounts[0])
    } else if (selectedAccount.id === "2") {
        populateSpendings(accounts[1])
    } else {
        spendingsData.innerHTML = `<p class="no-spendings">No spendings in this account</p>`
    }
}

// 4) Visually display spendings data
function populateSpendings(selectedAccount) {
    for (let i = 0; i < selectedAccount.spendings.length; i++) {
        let percent = selectedAccount.getPercentsArray()[i] 
        let id = "sc-" + selectedAccount.spendings[i].category
        
        spendingsData.innerHTML += `
                <div class="spending-category sc-${i}" id="${id}">
                    <p class="spending-name">${selectedAccount.spendings[i].category}</p>
                    <p class="percent">${selectedAccount.getPercentsArray()[i]}%</p>
                    <p>$${numberWithCommas(selectedAccount.spendings[i].spent)}</p>
                </div>
        `
        
        // 4b) Apply a hard stop background gradient to each category based on % of total spending
        document.getElementById(id).style.background = 
        `linear-gradient(to right, var(--clr-dark), var(--clr-dark) ${percent}%, var(--clr-main) ${percent}%, var(--clr-main))`
     }
}


// FUNCTION CALLS ------------------------------------------------------------------
displayAccountInfo()