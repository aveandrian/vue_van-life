<template>
  <div class="host-income">
    <h1 class="host-income--title">Income</h1>
    <p class="host-income--filter">Last <span>30 days</span></p>
    <h2 class="host-income--value">$2,260</h2>
    <div class="host-income--graph">
      <div class="host-income-graph-amounts">
        <div
          v-for="(amount, i) in amountData"
          :key="i"
          class="graph-amount-item"
        >
          <p class="graph-amount-title">${{ amount }}</p>
          <div class="graph-amount-row"></div>
        </div>
      </div>
      <div class="host-income-graph-values">
        <div v-for="(incomeMonth, i) in incomeData" :key="i" class="column">
          <div
            class="graph-column"
            :class="`${
              incomeMonth.month == currentMonthName ||
              incomeMonth.month == thirtyDaysAgoMonth
                ? 'highlight'
                : ''
            }`"
            :style="{ height: `${(incomeMonth.amount / 5000) * 100}%` }"
          ></div>
          <p class="column-month">{{ incomeMonth.month.slice(0, 3) }}</p>
        </div>
      </div>
    </div>
    <div class="info-header">
      <h3 class="info-header--title">Your transactions (3)</h3>
      <p class="info-header--filter">Last <span>30 days</span></p>
    </div>
    <div class="transactions">
      <div v-for="item in transactionsData" :key="item.id" class="transaction">
        <h3 class="transaction-amount">${{ item.amount }}</h3>
        <p class="transaction-date">{{ item.date }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const options: Intl.DateTimeFormatOptions = { month: 'long' }
const today = new Date()
const currentMonth = new Date().getMonth()
const currentDay = new Date().getDate()
const thirtyDaysAgoMonth = new Intl.DateTimeFormat('en-US', options).format(
  new Date().setDate(currentDay - 30),
)
const currentMonthName = new Intl.DateTimeFormat('en-US', options).format(today)

const optionsForData: Intl.DateTimeFormatOptions = {
  month: 'short',
  year: '2-digit',
  day: 'numeric',
}
const dateTimeFormat2 = new Intl.DateTimeFormat('en-US', optionsForData)

const amountData = ['5k', '4k', '3k', '2k', '1k', '0']
const incomeData = [
  {
    month: new Intl.DateTimeFormat('en-US', options).format(
      today.setMonth(currentMonth - 5),
    ),
    amount: 4000,
  },
  {
    month: new Intl.DateTimeFormat('en-US', options).format(
      today.setMonth(currentMonth - 4),
    ),
    amount: 1500,
  },
  {
    month: new Intl.DateTimeFormat('en-US', options).format(
      today.setMonth(currentMonth - 3),
    ),
    amount: 3000,
  },
  {
    month: new Intl.DateTimeFormat('en-US', options).format(
      today.setMonth(currentMonth - 2),
    ),
    amount: 2800,
  },
  {
    month: new Intl.DateTimeFormat('en-US', options).format(
      today.setMonth(currentMonth - 1),
    ),
    amount: 1500,
  },
  {
    month: new Intl.DateTimeFormat('en-US', options).format(
      today.setMonth(currentMonth),
    ),
    amount: 500,
  },
]
const transactionsData = [
  {
    amount: 720,
    date: dateTimeFormat2.format(new Date(new Date().setDate(currentDay - 7))),
    id: '1',
  },
  {
    amount: 560,
    date: dateTimeFormat2.format(new Date(new Date().setDate(currentDay - 15))),
    id: '2',
  },
  {
    amount: 980,
    date: dateTimeFormat2.format(new Date(new Date().setDate(currentDay - 20))),
    id: '3',
  },
]
</script>

<style>
.host-income {
  padding-inline: 1.625rem;
  color: #161616;
}

.host-income--title {
  margin-block: 3vh;
}

.host-income--filter {
  color: #4d4d4d;
  margin-bottom: 2vh;
}

.host-income--filter span {
  text-decoration: underline;
  font-weight: bold;
}

.host-income--value {
  font-size: 2.375rem;
  color: #161616;
  font-weight: 900;
}

.host-income--graph {
  margin-block: 2vh;
  position: relative;
  max-width: 31.25rem;
}

.host-income-graph-amounts {
  display: grid;
  grid-template-columns: 1fr;
}

.graph-amount-item {
  margin-top: 4vh;
  display: grid;
  grid-template-columns: 10% auto;
  align-items: baseline;
}

.graph-amount-title {
  width: fit-content;
}

.graph-amount-row {
  height: 0.125rem;
  width: 100%;
  background: url('../assets/line.svg') no-repeat;
  background-size: 100% auto;
}

.host-income-graph-values {
  position: absolute;
  bottom: 1%;
  right: 0;
  width: 28.125rem;
  height: 85%;
  display: flex;
  align-items: end;
  gap: 5%;
}

.column {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  gap: 2rem;
  position: relative;
}

.column-month {
  position: absolute;
  bottom: -2rem;
}

.graph-column {
  width: 3.5rem;
  border-radius: 0.3125rem;
  background: #ffead0;
}

.graph-column.highlight {
  background: #ff8c38;
}

.info-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 3vh;
  width: 43.75rem;
}

.info-header--filter {
  color: #4d4d4d;
}

.info-header--filter span {
  text-decoration: underline;
  font-weight: bold;
}

.info-header--title {
  font-weight: 700;
  font-size: 1.5rem;
  margin-top: 3.75rem;
}

.transaction {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  margin-bottom: 1.9375rem;
  padding: 2.1875rem 1.8125rem;
  border-radius: 0.375rem;
  width: 43.75rem;
}

.transaction-amount {
  font-size: 2.25rem;
  font-weight: 600;
  margin: 0;
}

.transaction-date {
  font-weight: 500;
  font-size: 1.25rem;
  color: #4d4d4d;
}

@media screen and (max-width: 59.375rem) {
  .host-income--graph,
  .host-income-graph-amounts {
    width: 100%;
    max-width: 100%;
  }

  .graph-amount-item {
    column-gap: 5vw;
  }

  .host-income-graph-values {
    width: 100%;
  }

  .host-income-graph-values {
    justify-content: end;
  }

  .graph-column {
    width: 8vw;
  }

  .info-header--title {
    font-size: 1.2rem;
  }

  .transaction,
  .info-header {
    width: 100%;
  }
}
</style>
