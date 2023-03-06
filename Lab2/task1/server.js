var myMod = require("./module")
let myClass = myMod.myClass;
//create user1
let user1 = new myClass();
user1.AddTicket(1,15,504,"paris","london","3/8/2023");
user1.AddTicket(2,20,305,"sengaphor","dubai","6/8/2023");
user1.DisplayAllTickets();
user1.DisplayMyTickets(2);
user1.updateTicket(2,5,277,"italy","mosko","30/12/2023");
user1.DisplayAllTickets()
//create user2
let user2 = new myClass();
user2.AddTicket(1,3,900,"koria","switzerland","12/6/2023");
user2.AddTicket(2,30,210,"scotland","tokyo","21/3/2023");
user2.AddTicket(3,7,800,"china","india","11/5/2023");
user2.DisplayAllTickets();
user2.DisplayMyTickets(2);
user1.updateTicket(3,18,338,"romania","kuwait","30/12/2023");
user1.DisplayAllTickets()

