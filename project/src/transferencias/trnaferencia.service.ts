import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {PeliculasEntity} from "../pelicula/peliculas.entity";
import {Like, Repository} from "typeorm";
import {TransferenciasEntity} from "./transferencias.entity";
import {UsuarioEntity} from "../Usuario/usuario.entity";
import {ActoresEntity} from "../actores/actores.entity";

@Injectable()
export class TrnaferenciaService {
    listaTransferencias=[
        {'id':1,'peliculaSoliocitada':1,'peliculaOfrecido':2,'usuarioSolicita':1,'usuarioOfrece':2},
        {'id':2,'peliculaSoliocitada':4,'peliculaOfrecido':3,'usuarioSolicita':1,'usuarioOfrece':4},
        {'id':3,'peliculaSoliocitada':1,'peliculaOfrecido':2,'usuarioSolicita':1,'usuarioOfrece':2}
    ];
    constructor(@InjectRepository(TransferenciasEntity)
                private readonly tranferenciasRepository: Repository<TransferenciasEntity>){
    }

    crearPeliculas() {
        for(var transferencias in this.listaTransferencias) {
            const transfe = new TransferenciasEntity();
            transfe.id = this.listaTransferencias[transferencias].id;
            const peli=new PeliculasEntity();
            peli.id= this.listaTransferencias[transferencias].peliculaSoliocitada;
            transfe.peliculaSoliocitada=peli;
            const peli1=new PeliculasEntity();
            peli1.id= this.listaTransferencias[transferencias].peliculaOfrecido;
            transfe.peliculaOfrecido=peli1;
            const peli2=new UsuarioEntity();
            peli2.id= this.listaTransferencias[transferencias].usuarioOfrece;
            transfe.usuarioOfrece =peli2;
            const peli3=new UsuarioEntity();
            peli3.id= this.listaTransferencias[transferencias].usuarioSolicita;
            transfe.usuarioSolicita =peli3;
            this.tranferenciasRepository.save(transfe);

        }
        return this.tranferenciasRepository.find();
    }

    async ObtenerTodos(): Promise<TransferenciasEntity[]> {
        return await this.tranferenciasRepository.find();
    }

    async traerTransaccionesPorUsuario(usuarioID): Promise<TransferenciasEntity[]> {
        return await this.tranferenciasRepository.find({where: {usuarioId: usuarioID}});
    }
}
