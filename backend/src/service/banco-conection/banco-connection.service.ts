/* eslint-disable @typescript-eslint/camelcase */
import { Injectable, BadRequestException } from '@nestjs/common';
import * as crypto from "crypto";
import { connection } from '../../database/config/connection.config';

@Injectable()
export class BancoConnectionService {
    // Session
    async login (body: any){
        const { id } = body;

        const ong = await connection('ongs')
            .where('id',id)
            .select('name')
            .first()
        if (!ong){
            throw new BadRequestException({status: 400 ,error: "No Ong found with this id"})
        }

        return ong;
    }

    // Profile
    async getAllYouMade(ong_id: any){
        const incidents = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*');
        return incidents;
    }

    // incidents
    async canDelete(id: any, ong_id: any){
        const incident = await connection('incidents')
            .where('id',id)
            .select('ong_id')
            .first();
        return incident.ong_id !== ong_id;
    }

    async delete (id: any){
        await connection('incidents').where('id', id).delete();
    }

    async createIncident(incident: any, ong_id: string){
        if(!ong_id){ throw new BadRequestException({status: 400 ,error: "The header should not be empity"})}
        const { title, description, value } = incident;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        })
        return {id};
    }

    async getAllIncidents(query?: any){
        const { page = 1 } = query;
        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select(
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
                );
        return incidents
    }

    async countIncidents(){
        const [count] = await connection('incidents').count();
        return count['count(*)']
    }

    // ongs

    async getAllOngs(){
        const ongs = await connection('ongs').select('*');
        return ongs;
    }

    async createOng(ong: any){
        const { name, email, whatsapp, city, uf } = ong;
        const id = crypto.randomBytes(4).toString('HEX');
        
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })
        
        return {id};
    }
}
