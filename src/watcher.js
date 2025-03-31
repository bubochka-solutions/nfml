import path from 'node:path';
import chokidar from 'chokidar';

// Function to watch a file and its dependencies
export const enableWatcher = (usedFilePaths, callback) => {
    const watcher = chokidar.watch(usedFilePaths, {
        awaitWriteFinish: true,
        persistent: true
    });

    watcher.on('change', async (changedPath) => {
        console.log(`File changed: ${changedPath}`);
        const { usedFilePaths } = await callback();
        const watchedPaths = watcher.getWatched();

        const watchedFilePaths = Object.entries(watchedPaths).flatMap(
            ([dirPath, filenames]) => filenames.map(
                (filename) => path.join(dirPath, filename)
            )
        );

        const unusedFilePaths = watchedFilePaths.filter(
            (watchedFilePath) => !usedFilePaths.includes(watchedFilePath)
        );

        watcher.unwatch(unusedFilePaths);
        watcher.add(usedFilePaths);
    });

    console.log(`Watching files: ${usedFilePaths.join(', ')}`);
};
