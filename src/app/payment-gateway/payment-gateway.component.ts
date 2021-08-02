import { Component, OnInit } from '@angular/core';
import { MyservicesService } from '../myservices.service';

@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.css']
})
export class PaymentGatewayComponent implements OnInit {
amountToPay = this.service.amountToPay;
  constructor(public service:MyservicesService) { }

  ngOnInit(): void {
  }

}





































