import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Usuario } from "../models/usuario";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UsuarioService {
    private http = inject(HttpClient);
    private apiUrl = "http://localhost:3001/usuarios";

    listar(): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(this.apiUrl);
    }
    
    cadastrar(usuario: Usuario): Observable<Usuario> {
        return this.http.post<Usuario>(this.apiUrl, usuario);
    }
}
