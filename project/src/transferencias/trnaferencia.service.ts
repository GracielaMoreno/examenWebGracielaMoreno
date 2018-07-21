import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {PeliculasEntity} from "../pelicula/peliculas.entity";
import {Like, Repository} from "typeorm";
import {TransferenciasEntity} from "./transferencias.entity";
import {UsuarioEntity} from "../Usuario/usuario.entity";
import {ActoresEntity} from "../actores/actores.entity";
import {PeliculaService} from "../pelicula/pelicula.service";
import {UsuarioService} from "../Usuario/usuario.service";

@Injectable()
export class TrnaferenciaService {
    listaTransferencias=[
        {'id':1,'peliculaSoliocitada':1,'peliculaOfrecido':2,'usuarioSolicita':1,'usuarioOfrece':2},
        {'id':2,'peliculaSoliocitada':4,'peliculaOfrecido':3,'usuarioSolicita':1,'usuarioOfrece':4},
        {'id':3,'peliculaSoliocitada':1,'peliculaOfrecido':2,'usuarioSolicita':1,'usuarioOfrece':2}
    ];
    constructor(@InjectRepository(TransferenciasEntity)
                private readonly tranferenciasRepository: Repository<TransferenciasEntity>,
                private peliservice:PeliculaService,
                private usuarioService:UsuarioService){
    }

    crearPeticion() {
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

    async obtener(idPeticion){
        return await this.tranferenciasRepository.findOne(idPeticion,
            {relations:["peliculaSoliocitada","peliculaOfrecido"]});
    }
    async ObtenerTodos(): Promise<TransferenciasEntity[]> {
        return await this.tranferenciasRepository.find();
    }

    async traerTransaccionesPorUsuario(usuarioID): Promise<TransferenciasEntity[]> {
        return await this.tranferenciasRepository.find({where: {usuarioId: usuarioID}});
    }
    async rechazarPeticion(idPeticion){
        const peticion=await this.tranferenciasRepository.findOne(idPeticion);

        return await this.tranferenciasRepository.remove(peticion);


    }
    async aceptarPeticion(idPeticion){
        const peticion=await this.obtener(idPeticion);

        console.log("peticion", peticion);
        const solicitado= peticion.peliculaSoliocitada;
        const ofrecio=peticion.peliculaOfrecido;

        console.log("envio: ", solicitado,ofrecio);

        const cambio=this.peliservice.cambiarPeliculas(solicitado,ofrecio);

        const peticiones= await  this.tranferenciasRepository.find();
        peticiones.forEach((p)=>{
            if(p.peliculaSoliocitada==solicitado){
                this.tranferenciasRepository.remove(p);
            }
        });

        return cambio;
    }

    async crearPeticiondesdeFront(idAutoOfrecido,idAutoSolicitado,idPoseedor,idOfrece){
        const peticion= new TransferenciasEntity();
        peticion.peliculaSoliocitada=await this.peliservice.obtenerPeli(idAutoOfrecido);
        peticion.peliculaOfrecido= await  this.peliservice.obtenerPeli(idAutoSolicitado);
        peticion.usuarioOfrece= await this.usuarioService.obtener(idOfrece);
        peticion.usuarioSolicita= await this.usuarioService.obtener(idPoseedor);

        this.tranferenciasRepository.save(peticion);

        return "peticion creada";
    }
}
