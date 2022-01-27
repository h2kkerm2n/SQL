import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { StringLiteralLike } from 'typescript';
import User from './user';

@Entity()
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: StringLiteralLike;
  @ManyToOne(() => User)
  authorId: string;
  @Column('varchar', { length: 75 })
  title: string;
  @Column('varchar', { length: 100 })
  metaTitle: string;
  @Column('tinytext')
  summary: string;
  @Column()
  published: boolean;
  @Column('text')
  content: string;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => User, (user) => user.id)
  author: User;
}

export default Post;
