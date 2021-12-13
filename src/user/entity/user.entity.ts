import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('increment')
  @ApiProperty({ description: '사용자의 id' })
  id: number;

  @Column({
    nullable: true,
  })
  name: string;

  @Column({
    unique: true,
  })
  @ApiProperty({
    description: '사용자의 이메일',
  })
  email: string;
}
