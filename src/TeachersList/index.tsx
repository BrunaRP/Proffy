import React from 'react';
import './styles.css';
import PageHeader from '../components/PageHeader';

 
function TeacherList(){
    return(
        <div id="page-teacher-list" className ="container">  
            <PageHeader title= "Estes são os proffys disponíveis." >
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject"> Matéria </label>
                        <input type="text" id="subject" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day"> Dia da semana </label>
                        <input type="text" id="week_day" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="time"> Hora </label>
                        <input type="text" id="time" />
                    </div>
                </form>
            </PageHeader>
            
            <main>
                <article className="teacher-item">
                    <header>
                        <img src="" alt=""/>
                        <div>
                            <strong>Bruna Polonio</strong>
                            <br></br>
                            <span>Programação</span>
                            
                            
                        </div>
                    </header>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea labore modi explicabo ipsa reiciendis distinctio, excepturi nihil? Asperiores vel, doloribus, nam unde exercitationem quas fuga dolores illo sint nesciunt maiores!
                        </p>
                        <br></br>

                     <footer>
                         <p> Preço/hora
                             <strong>R$80,00</strong>
                         </p>
                         <button type="button">
                             <img src="" alt=""/>
                         </button>

                    </footer>   
                    
                </article>
            </main>


        </div>
    )
}

export default TeacherList;