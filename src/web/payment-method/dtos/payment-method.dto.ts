import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

type PaymentMethodProvider = 'PAYDISINI' | 'DUITKU';
type PaymentMethodType =
  | 'TRANSFER_BANK'
  | 'TRANSFER_EWALLET'
  | 'DIRECT_EWALLET'
  | 'VIRTUAL_ACCOUNT'
  | 'RETAIL_OUTLET'
  | 'CREDIT_CARD'
  | 'LINK_PAYMENT'
  | 'OTHER';

export class CreatePaymentMethodDto {
  @ApiProperty()
  @IsString()
  providerId: string;

  @ApiProperty()
  @IsEnum(['PAYDISINI', 'DUITKU'])
  provider: PaymentMethodProvider;

  @ApiProperty()
  @IsEnum([
    'TRANSFER_BANK',
    'TRANSFER_EWALLET',
    'DIRECT_EWALLET',
    'VIRTUAL_ACCOUNT',
    'RETAIL_OUTLET',
    'CREDIT_CARD',
    'LINK_PAYMENT',
    'OTHER',
  ])
  type: PaymentMethodType;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  desc: string;

  @ApiProperty()
  @IsNumber()
  fees: number;

  @ApiProperty()
  @IsNumber()
  feesInPercent: number = 0;

  @ApiProperty()
  @IsNumber()
  minAmount: number;

  @ApiProperty()
  @IsNumber()
  maxAmount: number;
}

export class UpdatePaymentMethodDto {
  @IsString()
  id: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  providerId: string;

  @ApiProperty()
  @IsEnum(['PAYDISINI', 'DUITKU'])
  @IsOptional()
  provider: PaymentMethodProvider;

  @ApiProperty()
  @IsOptional()
  @IsEnum([
    'TRANSFER_BANK',
    'TRANSFER_EWALLET',
    'DIRECT_EWALLET',
    'VIRTUAL_ACCOUNT',
    'RETAIL_OUTLET',
    'CREDIT_CARD',
    'LINK_PAYMENT',
    'OTHER',
  ])
  type: PaymentMethodType;

  @ApiProperty()
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  desc: string;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  fees: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  feesInPercent: number = 0;

  @ApiProperty()
  @IsNumber()
  minAmount: number;

  @ApiProperty()
  @IsNumber()
  maxAmount: number;
}

export class DeletePaymentMethodDto {
  @ApiProperty()
  @IsString()
  id: string;
}
