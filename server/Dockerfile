FROM mysql:5.6

COPY ./database/AVIST.sql/ ./docker-entrypoint-initdb.d/1.sql
COPY ./database/AVIST_insert_dadosFalsos-teste.sql /docker-entrypoint-initdb.d/2.sql
RUN mysql -uroot -prota < ./docker-entrypoint-initdb.d/1.sql  
RUN mysql -uroot -prota < ./docker-entrypoint-initdb.d/2.sql  