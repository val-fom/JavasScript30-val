var gulp 			 		 = require('gulp'), // Подключаем Gulp
		browserSync    = require('browser-sync'); // ... browser-sync

gulp.task('browser-sync', function() { // Создаем таск browser-sync
	browserSync({ // Выполняем browserSync
		server: { // Определяем параметры сервера
			baseDir: 'lesson-dir', // Директория для сервера - для каждой задачи соответствующая
			index: "index-VAL.html" // кастомный индекс-файл. Во всех задачах одинаковый.
		},
		notify: false,// Отключаем уведомления
		// tunnel: true,
		// tunnel: "projectmane", //Demonstration page: http://projectmane.localtunnel.me
	});
});

gulp.task('watch', ['browser-sync'], function() {
	gulp.watch('**/*.css', browserSync.reload); // Наблюдение за css файлами в папках задач
	gulp.watch('**/*.html', browserSync.reload); // Наблюдение за HTML файлами в папках задач
});

gulp.task('default', ['watch']); // дефолтный таск галпа - watch