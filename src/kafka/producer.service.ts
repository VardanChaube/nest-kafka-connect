import { Injectable, OnApplicationShutdown, OnModuleInit } from '@nestjs/common';
import { Kafka, Producer, ProducerRecord } from 'kafkajs';

@Injectable()
export class ProducerService implements OnModuleInit, OnApplicationShutdown {
    //Connect to kafka server
    private readonly kafka = new Kafka({
        brokers: ['localhost:9092'],
    });



    private readonly producer: Producer = this.kafka.producer();

    async onModuleInit() {
        console.log("NODE ********* #######");
        await this.producer.connect();
    }

    async produce(record: ProducerRecord) {
        await this.producer.send(record);
    }

    async onApplicationShutdown() {
        await this.producer.disconnect();
    }

}
