package com.example.demo.controles;

import java.util.List;

import com.example.demo.models.Proyecto;
import com.example.demo.repo.ProyectoRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
@CrossOrigin
@RestController
@RequestMapping("/proyectos")
public class ProyectoController {

    //  public static List<Usuario> database = new ArrayList<Usuario>();
    //  public static int position = -1;
    //  public static int contador =0;

    // @GetMapping("/")

    // public List<Usuario> index(){
    //     return Vistas.database;
    // }

    @Autowired
    private ProyectoRepo proyectoRepository; 

    @GetMapping("")
    List<Proyecto> index(){
        return proyectoRepository.findAll(); 

    }
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("")
    Proyecto create(@RequestBody Proyecto proyecto){
        return proyectoRepository.save(proyecto);

    }
    @PostMapping("{id}")
    Proyecto update(@PathVariable String id, @RequestBody Proyecto proyecto){
        Proyecto proyectoFromDB= proyectoRepository
        .findById(id)
        .orElseThrow(RuntimeException::new);

        proyectoFromDB.setNombreProyeto(proyecto.getNombreProyeto());
        proyectoFromDB.setObjetivos(proyecto.getObjetivos());
        proyectoFromDB.setPresupuesto(proyecto.getPresupuesto());
        proyectoFromDB.setFechaInicio(proyecto.getFechaInicio());
        proyectoFromDB.setFechaFIn(proyecto.getFechaFIn());
       
         


        return proyectoRepository.save(proyectoFromDB);


    }
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("{id}")
    void delete(@PathVariable String id){
        Proyecto proyecto= proyectoRepository
        .findById(id)
        .orElseThrow(RuntimeException::new);

   
        proyectoRepository.delete(proyecto);

 }