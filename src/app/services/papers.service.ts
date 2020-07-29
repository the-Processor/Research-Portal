import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Paper } from '../models/paper';

@Injectable({providedIn: 'root'})

export class PaperService{

  // papersUpdated = new Subject<Paper[]>();

  // papers: Paper[] = [
  //   {
  //     title: 'Mechanical engineering control system...',
  //     areaOfResearch: 'mechanical',
  //     authorName: 'Shujing Wu, Dazhong Wang, Shigenori Okubo',
  //     abstract: ''
  //   },
  //   {
  //     title: 'Systematic approach for validating Java-MongoDB Schema',
  //     areaOfResearch: 'computer',
  //     authorName: 'Gokul Prabagaren',
  //     abstract: 'MongoDB® product of 10gen, Inc is one of widely used NoSQL [No Structured Query Language] Database in industry and this paper discusses a systemic approach for validating the MongoDB NoSQL Schema in Java. This approach uses a user defined xml schema to compare against the MongoDB object before any data manipulation operation.'
  //   },
  //   {
  //     title: 'Theoretical Research of Surface Roughness for HSM',
  //     areaOfResearch: 'mechanical',
  //     authorName: 'S WANG, J Zhao, X Ai',
  //     abstract: ''
  //   },
  //   {
  //     title: 'Elementary fluid dynamics',
  //     areaOfResearch: 'mechanical',
  //     authorName: 'DJ Acheson',
  //     abstract: ''
  //   },
  //   {
  //     title: 'Boosting Teaching Experience in Mechanical Engineering',
  //     areaOfResearch: 'mechanical',
  //     authorName: 'Issah M. Alhamad, Waleed K. Ahmed, Hayder Z. Ali',
  //     abstract: ''
  //   },
  //   {
  //     title: 'Study on security and prevention strategies of computer network',
  //     areaOfResearch: 'computer',
  //     authorName: 'Fuguo Li',
  //     abstract: 'With the rapid development of computer network technology, the security of computer network becomes increasingly important. Three main threats facing computer network security include: hackers, computer virus and denial of service attack.'
  //   },
  //   {
  //     title: 'Comparison of Two-Way Two-Dimensional Finite Automata...',
  //     areaOfResearch: 'computer',
  //     authorName: 'Jing Dong, Wenbing Jin',
  //     abstract: 'Three types of two-way two-dimensional finite automata and three-way two-dimensional finite automata are studied, including deterministic, nondeterministic and Las Vegas finite automata. By comparing the languages recognized by above automata, two results are obtained: (1) The power of two-way two-dimensional nondeterministic finite automata and three-way two-dimensio...'
  //   },
  //   {
  //     title: 'A 65nm embedded low power SRAM compiler',
  //     areaOfResearch: 'computer',
  //     authorName: 'Sheng Wu, Xiang Zheng, Zhiqiang Gao, Xiangqing He',
  //     abstract: 'A highly flexible design methodology of Static Random Access Memory (SRAM) compiler platform is proposed in this paper. With this method, a 65nm CMOS embedded low power single-port SRAM compiler which can generate the whole SRAM IP module files has been developed. A reconfigurable semiautomatic design flow of compiler is obtained, which can be fit for any regular circ...'
  //   },
  //   {
  //     title: 'Construction of based on horn chess game...',
  //     areaOfResearch: 'computer',
  //     authorName: 'Yong Teng, Xuefeng Zhang, Kai Fan, Guangyang Li, Bingbing Liu',
  //     abstract: 'With current development status of game theory and the research of automata theory, a kind of game automata system based on Moore automata is presented. A horn chess machine game system automata model is constructed, and the game process of the horn chess game automata system is analyzed. To achieve the best way to play, a reasonable evaluation function an...'
  //   }
  // ];

  // getPapers(){
  //   return this.papers.slice();
  // }

  // addPaper(newPaper: Paper){
  //   this.papers.push(newPaper);
  //   this.papersUpdated.next(this.papers.slice());
  // }

  // deletePaper(index: number){
  //   this.papers.splice(index, 1);
  //   this.papersUpdated.next(this.papers.slice());
  // }

}
