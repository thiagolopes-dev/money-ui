import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { firstValueFrom } from 'rxjs';


@Injectable({
    providedIn: 'root',
})
export class GovService {

    constructor(private http: HttpClient) {

    }

    getUf() {
        return firstValueFrom(this.http.get<any>('assets/dados/uf.json')).then(
            (res) => res.data as any[]
        );
    }

    getCidades(value: string) {
        return firstValueFrom(this.http.get<any>(`assets/dados/${value}.json`)).then(
            (res) => res.data as any[]
        )

    }
}