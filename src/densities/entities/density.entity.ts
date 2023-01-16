import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Density {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'character varying', nullable: false, unique: true })
  name: string;

  @Column({ type: 'float', nullable: false })
  density: number;

  @Column({ name: 'density_unit', type: 'character varying', nullable: true })
  densityUnit: string;

  @Column({ type: 'float', nullable: true })
  temperature: number;

  @Column({
    name: 'temperature_unit',
    type: 'character varying',
    nullable: true,
  })
  temperatureUnit: string;

  @Column({ type: 'float', nullable: true })
  pressure: number;

  @Column({ name: 'pressure_unit', type: 'character varying', nullable: true })
  pressureUnit: string;

  @Column({ name: 'data_source', type: 'character varying', nullable: false })
  dataSource: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createAt: Date;

  @Column({ type: 'boolean', default: true })
  active: boolean;
}
