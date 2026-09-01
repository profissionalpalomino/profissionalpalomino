#!/usr/bin/env bash
set -e
APP=portfolio-palomino-tech
SERVICE=palomino-tech_portfolio
VPS=root@187.77.57.158
TAG="portfolio-palomino:$(date +%s)"

echo "→ Gerando build local..."
npm run build

echo "→ Empacotando arquivos de produção..."
mkdir -p /tmp
tar -cf "/tmp/$APP.tar" --exclude=.git --exclude=node_modules .

echo "→ Enviando para a VPS..."
ssh "$VPS" "mkdir -p /root/$APP"
scp -q "/tmp/$APP.tar" "$VPS:/root/$APP/"

echo "→ Construindo imagem Docker e atualizando serviço Swarm..."
ssh "$VPS" "cd /root/$APP && tar -xf $APP.tar \
  && docker build -q -t $TAG . \
  && docker service update --force --image $TAG $SERVICE >/dev/null \
  && echo '  Serviço atualizado com sucesso!'"

echo "→ Testando disponibilidade..."
curl -s -o /dev/null -w "  HTTP %{http_code}\n" "https://palominotech.profissionalpalomino.cloud/"
echo "✓ No ar em: https://palominotech.profissionalpalomino.cloud"
