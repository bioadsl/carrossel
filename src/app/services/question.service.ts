import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Pergunta {
  perguntaId: number;
  respostaCerta: string;
}

interface PerguntaResponse {
  NUM_INSCRICAO: string;
  DES_PAYLOAD: {
    perguntas: Pergunta[];
  };
}

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private apiUrl = 'https://10.30.55.3:4000/api/perguntas';

  constructor(private http: HttpClient) {}

  getPerguntas(searchParam: string): Observable<PerguntaResponse[]> {
    const params = new HttpParams().set('search_param', searchParam);
    return this.http.get<PerguntaResponse[]>(this.apiUrl, { params });
  }
}
