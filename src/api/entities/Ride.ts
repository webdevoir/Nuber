import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn

} from "typeorm";

@Entity()
class Ride extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  name: string;

  @Column({
    type: "text",
    enum: ["ACCEPTED", "FINISHED", "CANCELED", "REQUESTING", "ONROUTE"]
  })
  status: rideStatus;

  @Column({ type: "text" })
  pickupAddress: string;

  @Column({ type: "double precision" })
  pickUpLat: number;

  @Column({type: "double precision"})
  pickUpLng: number;

  @Column({type: "text"})
  dropOffAddress: string;

  @Column({type: "double precision", default: 0})
  dropOffLat: number;

  @Column({type: "double precision", default: 0})
  dropOffLng: number;

  @Column({type: "double precision", default: 0})
  price: number;

  @Column({type: "text"})
  distance: string;

  @Column({type: "text"})
  duration: string;

  @CreateDateColumn()
  createdAt: string;
  @UpdateDateColumn()
  updatedAt: string;
}

export default Ride;