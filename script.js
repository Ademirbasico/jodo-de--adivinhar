   const numeroAlvo = Math.floor(Math.random() * 100) + 1;

        let tentativasRestantes = 5;
   const form = document.getElementById('formPalpite');
        form.addEventListener("submit", function(event){
            event.preventDefault();
            verificar();
        });
        function verificar(){
            const palpite = parseInt(document.getElementById('palpite').value);
            const mensagem = document.getElementById('mensagem');
            const tentativasSpan = document.getElementById('tentativas');
            const botaoRecarregar = document.getElementById('botaoRecarregar');
        
        function LimparClassesMensagem(mensagem){
            mensagem.classList.remove("acertou", "maior", "menor", "perdeu");
        }
        LimparClassesMensagem(mensagem);    

            if(isNaN(palpite) || palpite <1 || palpite > 100){
                mensagem.textContent = 'Por favor, insira um numero valido entre 1 e 100.';
            }else{
                tentativasRestantes--;
                tentativasSpan.textContent = tentativasRestantes;

                if(palpite === numeroAlvo){
                    mensagem.textContent = `Parabens! Voce acertou o numero ${numeroAlvo}. `;
                    botaoRecarregar.style.display = 'block';
                    mensagem.style.color = 'green';
                    desabilitarEntrada();
                    

                }  else if(palpite < numeroAlvo){
                    mensagem.textContent = 'Tente um numero maior.';
                    LimparClassesMensagem(mensagem);
                    mensagem.classList.add('maior');
                }
                else if(palpite > numeroAlvo){
                    mensagem.textContent = 'tente numero menor. ';
                    LimparClassesMensagem(mensagem);
                    mensagem.classList.add('menor');

                }
                if(tentativasRestantes === 0){
                    mensagem.textContent = `Acabaram suas tentativas. O numero correto era ${numeroAlvo}. `;
                    LimparClassesMensagem(mensagem);
                    mensagem.classList.add('perdeu');
                    desabilitarEntrada();
                    botaoRecarregar.style.display = 'block';
                }
            }
        }
        function desabilitarEntrada(){
            document.getElementById('campoPalpite').disabled = true;
            document.getElementById('botaoEnviar').disabled = true;
        }
        function recarregarPagina(){
            location.reload();
        }
