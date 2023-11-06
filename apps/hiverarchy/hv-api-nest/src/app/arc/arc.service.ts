// arc.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Arc, ArcDocument } from './arc.model';

@Injectable()
export class ArcService {
  constructor(@InjectModel(Arc.name) private arcModel: Model<ArcDocument>) {}

  async findAll(): Promise<Arc[]> {
    return this.arcModel.find().exec();
  }

  async findOne(id: string): Promise<Arc> {
    return this.arcModel.findById(id).exec();
  }

  async createArc(createArcDto: any): Promise<Arc> {
    const createdArc = new this.arcModel(createArcDto);
    return createdArc.save();
  }

  async updateArc(id: string, updateArcDto: any): Promise<Arc> {
    return this.arcModel.findByIdAndUpdate(id, updateArcDto, { new: true }).exec();
  }

  async delete(id: string): Promise<Arc> {
    return this.arcModel.findByIdAndRemove(id).exec();
  }

}
