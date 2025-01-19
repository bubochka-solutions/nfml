import chokidar from 'chokidar';

// Function to watch a file and its dependencies
export const enableWatcher = (usedFilePaths, callback) => {
    const watcher = chokidar.watch(usedFilePaths, {
        persistent: true
    });

    watcher.on('change', async (changedPath) => {
        console.log(`File changed: ${changedPath}`);
        const { usedFilePaths } = await callback();
        watcher.add(usedFilePaths);
    });

    console.log(`Watching files: ${usedFilePaths.join(', ')}`);
};
