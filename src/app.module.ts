import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KafkaModule } from './kafka/kafka.module';
// import { ProducerService } from './kafka/producer.service';
// import { ConsumerService } from './kafka/consumer.service';
import { TestConsumer } from './kafka/test.consumer';
import { ProducerService } from './kafka/producer.service';

@Module({
  imports: [KafkaModule],
  controllers: [AppController],
  providers: [ProducerService, AppService, TestConsumer],
})
export class AppModule { }
