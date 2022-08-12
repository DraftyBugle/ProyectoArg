
package com.portfolio.mgb.Interface;

import com.portfolio.mgb.Entity.Persona;
import java.util.List;

public interface IPersonaService {
     //trae una lista de personas
    public List<Persona> getPersona();
    //guarda un objeto tipo persona
    public void savePersona(Persona persona);
    //elimina un objeto pero lo buscamos por id
    public void deletePersona (Long id);
    //busca un persoa por id
    public Persona findPersona(Long id);
}
