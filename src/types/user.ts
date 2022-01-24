import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  firstName: string;
  @Column()
  middleName: string;
  @Column()
  lastName: string;
  @Column()
  mobile: string;
  @Column()
  eMail: string;
  @Column()
  registeredAt: Date;
  @Column()
  lastLogin: Date;
  @Column()
  intro: string;
  @Column()
  profile: string;
  @Column()
}

export default User;
