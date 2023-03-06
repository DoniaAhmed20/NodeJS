
class myClass{
    flight_tickets = [];
    AddTicket(id, seatNumber, flightNumber, departure, arrival, Travelling_date){
        let ticket = {id, seatNumber, flightNumber, departure, arrival, Travelling_date};
        this.flight_tickets.push(ticket);
    }
    DisplayAllTickets(){
        console.log("All The Tickets are:")
        for(let i=0; i<this.flight_tickets.length; i++){
            console.log(this.flight_tickets[i]);
        }
    }
    DisplayMyTickets(id){
        for(let i=0; i<this.flight_tickets.length; i++){
            if(id == this.flight_tickets[i].id){
                console.log("The specific ticket of " +" id: " +`${id}`)
                console.log(this.flight_tickets[i]);

            }
        }
    }
    updateTicket(id,s,x,y,z,d){
        for(let i=0; i<this.flight_tickets.length; i++){
                    if(id == this.flight_tickets[i].id){
                        this.flight_tickets[i].flightNumber=s;
                        this.flight_tickets[i].seatNumber=x;
                        this.flight_tickets[i].departure=y;
                        this.flight_tickets[i].arrival=z;
                        this.flight_tickets[i].Travelling_date=d;
                    }
                    console.log(this.flight_tickets[i]);
    }
}
}

module.exports = {
    myClass
}