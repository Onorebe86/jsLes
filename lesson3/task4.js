function tW() {
  events = {}
  cash = 0
  all_tickets = []

  this.createEvent = function(name, coast) {
    events[name] = {
      name: name,
      coast: coast,
      tickets: [],
      returnedTickets: []
    }
  }
  this.buyTicket = function(name) {
    id = (Math.floor( (Math.random() * 10000) + 90000 )).toString()
    id = '123456' //for test
    events[name].tickets.push(id)
    cash += events[name].coast
  }

  this.returnTicket = function(id) {
    name = Object.values(events).find(e => e.tickets.includes(id)).name
    events[name].tickets = events[name].tickets.filter(t => t !== id)
    events[name].returnedTickets.push(id)
    cash -= events[name].coast
  }

  this.events = events
  this.cash = cash
}

const ticketWindow = new tW()

ticketWindow.createEvent('Concert', 500) // создаем концерт и указываем цену билетов
ticketWindow.buyTicket('Concert') /* Добавляем сумму за билет в кассу, возвращаем
случайный шестизначный ID билета, создать ID можно любым способом */

ticketWindow.returnTicket('123456') /* Возвращаем билет, если в системе такой id записан
как проданный, он должен быть удален из списка проданных и из кассы должна быть
вычтена соответствующая его цене сумма */

console.log(ticketWindow)
