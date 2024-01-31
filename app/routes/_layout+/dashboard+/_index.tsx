import { useTheme } from '~/app/shared/lib/hooks';

export default function DashboardIndexRoute() {
	return (
		<div className="flex size-full flex-col items-center justify-center gap-4">
			<h3 className="text-xl font-bold">This is your Dashboard</h3>
			<p className="mb-4">
				Select a section from the left sidebar to get started
			</p>
			<Placeholder />
		</div>
	);
}

const Placeholder = () => {
	const theme = useTheme();
	const isDark = theme === 'dark';
	const fillWhite = isDark ? 'white' : 'black';
	const fillBlack = isDark ? 'black' : 'white';

	return (
		<svg
			width="250"
			height="150"
			viewBox="0 0 1002 750"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g>
				<path
					d="M506.26 220.74C506.26 212.42 506.21 204.09 506.26 195.77C506.51 159.92 523.65 134.81 555.21 118.9C556.1 118.45 556.97 117.81 557.91 117.67C569.5 115.91 572.32 106.67 575.72 97.5296C581.21 82.7896 586.58 67.9396 593.14 53.6596C603.13 31.9596 619.94 16.2896 641.79 7.35955C652.91 2.81955 665.58 0.329555 677.6 0.109555C705.99 -0.420445 734.41 1.34955 762.82 1.44955C783.91 1.51955 805.01 -0.240445 826.08 0.0895546C842.23 0.339555 857.89 4.28955 872.16 12.4796C898.11 27.3796 913.3 50.2896 921.74 78.4396C924.79 88.6096 928.74 98.4996 932.25 108.53C933.48 112.04 935.63 114.03 939.36 115.4C967.01 125.52 985.83 144.42 994.14 172.89C996.06 179.47 996.57 186.62 996.68 193.53C996.99 213.33 997.05 233.15 996.68 252.95C996.24 276.37 989.63 297.49 971.26 313.4C966.54 317.49 965.01 322.13 965.05 328.25C965.19 347.78 957.45 364.13 944.46 378.55C927.32 397.58 905.51 404.13 880.78 405.04C862.46 405.72 846.33 400 831.57 390.29C819.2 382.15 811.26 369.9 805.29 356.49C803.41 352.26 801.6 347.9 800.55 343.42C799.62 339.42 797.59 338.75 793.92 338.77C772.78 338.93 751.64 338.84 730.49 338.83C723 338.83 715.51 338.93 708.02 338.78C705.1 338.72 703.6 339.43 702.93 342.63C699.54 358.7 691.67 372.26 679.58 383.43C668.95 393.24 656.48 399.72 642.53 402.78C617.06 408.36 593.01 404.47 571.26 389.57C556.27 379.31 547.37 364.54 541.25 347.78C538.34 339.81 537.82 331.62 537.7 323.25C537.66 320.68 536.16 317.34 534.2 315.72C520.83 304.68 512.82 290.15 508.57 273.93C506.14 264.63 506.68 254.5 506.28 244.73C505.95 236.75 506.21 228.75 506.21 220.76C506.21 220.76 506.22 220.76 506.23 220.76L506.26 220.74ZM921.69 294.13C943.93 289.27 955 270.55 954.03 250.24C953.21 233.14 954.05 215.97 953.8 198.84C953.71 192.76 953.25 186.52 951.77 180.66C948.09 166.13 929.81 151.48 910.42 153.3C906.03 153.71 903.98 152.25 902.47 148.06C894.25 125.22 885.65 102.53 877.32 79.7296C869.07 57.1296 850.28 42.8396 827.97 42.8096C778.54 42.7496 729.1 42.8896 679.67 42.8596C655.62 42.8396 639.01 54.6296 629.83 76.0296C620.33 98.1796 612.35 120.97 603.76 143.51C600.18 152.89 600.25 152.97 590.38 153.07C567.1 153.32 549.37 171.33 549.19 191.96C549.01 212.25 548.84 232.54 549.02 252.83C549.22 275.49 559.59 288.54 581.67 294.12C581.67 304.26 581.41 314.55 581.73 324.83C582.22 340.22 588.26 352.77 602.79 359.39C617.74 366.21 632.79 366.13 646.67 356.32C657.82 348.44 662.4 337 662.56 323.65C662.68 313.54 662.58 303.42 662.58 292.85H842.25C842.25 302.23 842.13 311.51 842.3 320.78C842.39 325.91 842.13 331.26 843.45 336.12C850.46 361.81 876.91 369.26 898.17 360.73C913.22 354.69 921.71 342.79 921.67 325.85C921.65 315.23 921.67 304.61 921.67 294.13H921.69Z"
					fill={fillWhite}
				/>
				<path
					d="M626.61 748.25C610 749.25 593.66 747.36 578.21 741.2C544.62 727.81 519.46 704.58 502.67 672.78C494.11 656.57 489.86 638.85 487.75 620.46C485.16 597.89 488.81 576.42 497.17 555.77C508.32 528.22 526.13 505.43 550.66 488.51C567.74 476.73 586.69 468.11 607.42 465.91C620.99 464.47 634.91 466.04 648.66 466.61C661.99 467.16 674.08 472.32 686.1 477.56C689.17 478.9 691.17 477.88 691.66 474.32C694.26 455.45 704.75 441.45 720.78 432.49C740.36 421.55 760.51 422.63 780.11 433.87C791.84 440.59 798.86 450.99 803.94 463C804.95 465.39 805.12 468.13 805.63 470.72C806.35 474.38 808.37 475.91 812.06 474.74C815.23 473.73 818.41 472.75 821.52 471.6C839.52 464.94 858.34 463.53 877.02 465.56C897.74 467.81 917.09 474.86 935.04 486.25C950.58 496.11 963.03 508.86 973.42 523.45C984.79 539.42 993.38 556.94 997.5 576.54C1000.71 591.83 1002.38 607.16 1000.71 622.54C998.57 642.3 993.17 661.4 982.87 678.56C961.97 713.39 932.87 737.65 892.25 746.12C875.35 749.64 858.2 750.02 841.23 747.01C828.17 744.69 815.58 740.48 803.68 734.36C785.81 725.18 772.49 710.85 759.41 696.14C757.76 694.29 754.85 693.52 752.44 692.42C751.75 692.11 750.79 692.46 749.97 692.37C741 691.38 734.58 693.76 728.37 701.64C713.39 720.67 693.88 734.11 670.39 741.17C662.31 743.6 654.3 746.58 646.04 748.04C639.75 749.15 633.1 748.26 626.61 748.26V748.25ZM737.65 531.79C723.03 531.79 709.24 531.85 695.46 531.69C694.05 531.67 692.47 530.51 691.29 529.5C667.59 509.36 640.02 500.7 609.7 506.6C550.14 518.19 512.84 579.48 530.66 636.92C542.79 676.02 568.84 700.5 609.99 706.76C631.26 710 651.96 707.26 671.28 696.85C689.59 686.98 702.87 672.38 712.64 654.24C713.52 652.61 715.98 650.87 717.74 650.84C737.04 650.56 756.35 650.55 775.66 650.7C777.13 650.71 779.09 652.2 779.96 653.55C782.65 657.73 784.62 662.38 787.4 666.5C815.99 708.93 868.23 717.86 909.09 697.28C943.99 679.7 965.63 638.03 961.34 597.91C958.71 573.29 948.15 552.44 931.17 534.43C898.36 499.63 842.63 495.04 805.31 525.01C799.13 529.97 793.22 532.16 785.53 531.66C777.81 531.16 770.03 531.55 761.84 531.55C761.84 528.95 761.84 526.99 761.84 525.02C761.86 507.71 761.94 490.4 761.86 473.09C761.83 467.02 757.61 462.13 751.93 461.05C746.43 460 740.68 463.32 738.58 469.1C737.86 471.07 737.69 473.32 737.69 475.44C737.62 493.9 737.65 512.36 737.65 531.77V531.79Z"
					fill={fillWhite}
				/>
				<path
					d="M921.68 294.12C921.68 304.6 921.66 315.22 921.68 325.84C921.72 342.78 913.23 354.68 898.18 360.72C876.91 369.26 850.47 361.8 843.46 336.11C842.13 331.25 842.4 325.9 842.31 320.77C842.14 311.5 842.26 302.22 842.26 292.84H662.59C662.59 303.41 662.69 313.52 662.57 323.64C662.41 336.99 657.83 348.43 646.68 356.31C632.8 366.12 617.75 366.2 602.8 359.38C588.27 352.75 582.22 340.21 581.74 324.82C581.42 314.54 581.68 304.25 581.68 294.11C559.6 288.53 549.23 275.47 549.03 252.82C548.85 232.53 549.02 212.24 549.2 191.95C549.38 171.32 567.11 153.31 590.39 153.06C600.25 152.95 600.19 152.87 603.77 143.5C612.36 120.97 620.34 98.1703 629.84 76.0203C639.02 54.6203 655.63 42.8303 679.68 42.8503C729.11 42.8803 778.55 42.7403 827.98 42.8003C850.3 42.8303 869.08 57.1203 877.33 79.7203C885.66 102.52 894.26 125.21 902.48 148.05C903.99 152.24 906.04 153.71 910.43 153.29C929.82 151.46 948.1 166.12 951.78 180.65C953.27 186.51 953.72 192.75 953.81 198.83C954.06 215.96 953.22 233.13 954.04 250.23C955.01 270.55 943.94 289.26 921.7 294.12H921.68ZM876.53 152.85C874.3 146.75 872.32 141.34 870.34 135.92C864.33 119.41 858.47 102.84 852.25 86.4103C848.21 75.7403 838.83 69.5703 827.59 69.5703C777.99 69.5803 728.39 69.6003 678.79 69.6503C666.4 69.6603 657.61 75.5903 653.06 87.1103C647.96 100.03 643 113.02 638.04 126C634.69 134.77 631.43 143.57 627.95 152.85H876.51H876.53ZM627.91 251.16C631.74 251.16 635.57 251.36 639.39 251.11C643.98 250.81 648.93 251.11 653.03 249.45C664.43 244.82 670.33 232.01 667.76 219.41C665.13 206.47 655.68 198.53 642.48 198.41C633.84 198.33 625.16 199.08 616.56 198.54C601.02 197.55 592.45 207.15 589.75 219.86C586.31 236.09 598.25 252.72 613.94 251.24C618.56 250.8 623.25 251.17 627.91 251.18V251.16ZM874.34 251.21C874.34 251.03 874.34 250.85 874.34 250.67C881.47 250.67 888.81 251.75 895.69 250.43C907.45 248.18 914.81 235.07 913.39 221.19C912.15 209.03 901.83 198.92 890.05 198.65C880.9 198.44 871.73 198.96 862.6 198.5C847.42 197.74 839.11 207.7 835.95 219.1C831.88 233.77 844.08 253.23 860.37 251.29C864.96 250.74 869.68 251.21 874.34 251.21ZM752.16 237.09V237.13C762.98 237.13 773.8 237.37 784.6 236.96C787.18 236.86 790.57 235.24 792.03 233.21C796.04 227.63 791.61 221.34 783.69 221.29C762.72 221.16 741.75 221.21 720.78 221.24C714.63 221.24 710.56 224.78 710.7 229.76C710.83 234.4 714.31 237.03 720.7 237.07C731.18 237.14 741.67 237.09 752.15 237.09H752.16Z"
					fill={fillBlack}
				/>
				<path
					d="M737.64 531.79C737.64 512.37 737.61 493.92 737.68 475.46C737.68 473.34 737.86 471.08 738.57 469.12C740.67 463.34 746.42 460.02 751.92 461.07C757.6 462.15 761.82 467.04 761.85 473.11C761.93 490.42 761.85 507.73 761.83 525.04C761.83 527 761.83 528.97 761.83 531.57C770.01 531.57 777.79 531.18 785.52 531.68C793.2 532.18 799.12 529.99 805.3 525.03C842.62 495.06 898.35 499.65 931.16 534.45C948.14 552.46 958.7 573.31 961.33 597.93C965.61 638.05 943.98 679.72 909.08 697.3C868.22 717.88 815.99 708.95 787.39 666.52C784.62 662.4 782.64 657.75 779.95 653.57C779.08 652.21 777.12 650.73 775.65 650.72C756.34 650.57 737.04 650.58 717.73 650.86C715.98 650.89 713.51 652.63 712.63 654.26C702.85 672.4 689.58 687 671.27 696.87C651.95 707.28 631.25 710.02 609.98 706.78C568.83 700.51 542.78 676.03 530.65 636.94C512.83 579.5 550.13 518.22 609.69 506.62C640.02 500.72 667.58 509.38 691.28 529.52C692.46 530.53 694.04 531.69 695.45 531.71C709.24 531.87 723.02 531.81 737.64 531.81V531.79ZM603.11 639.75C603.11 647.15 602.71 653.8 603.21 660.38C603.85 668.89 613.05 675.64 622.25 674.98C632.13 674.27 639.54 667.29 639.59 658.6C639.62 652.5 639.59 646.4 639.59 639.72C646.52 639.72 652.8 639.75 659.08 639.72C669.68 639.65 675.23 634.72 676.65 624.19C678.17 612.9 670.24 604.12 658.89 604.37C652.62 604.51 646.34 604.39 639.67 604.39C639.67 597.33 639.34 591.01 639.75 584.74C640.32 575.98 632.19 566.5 621.25 566.87C610.84 567.22 602.9 574.74 602.88 585.06C602.88 591.31 602.88 597.55 602.88 604.52C595.92 604.52 589.78 604.52 583.65 604.52C573.71 604.54 569.44 607.63 566.45 616.96C562.55 629.13 570.26 639.73 583.04 639.75C589.34 639.75 595.64 639.75 603.12 639.75H603.11ZM810.32 618.94C811.24 626.32 816.5 632.11 823.4 632.91C829.53 633.62 833.61 630.48 837.65 626.32C852 611.52 866.71 597.07 881.01 582.23C883.52 579.63 885.75 575.95 886.31 572.48C887.25 566.65 884.32 561.76 879.16 558.76C873.88 555.69 867.99 556.1 863.52 560.56C847.27 576.74 831.2 593.1 815.31 609.63C812.96 612.08 811.95 615.82 810.32 618.96V618.94ZM865.53 664.16C867.38 663.24 871.21 662.32 873.62 659.95C889.77 644.11 905.78 628.11 921.39 611.75C923.77 609.26 925.18 604.4 924.74 600.93C923.32 589.45 910.39 584.77 901.85 592.6C892.79 600.91 884.26 609.81 875.6 618.55C868.23 625.99 860.93 633.52 853.72 641.13C849.88 645.18 848.39 649.95 850.8 655.33C853.29 660.87 857.78 663.56 865.52 664.17L865.53 664.16ZM717.13 582.8V582.86C713.64 582.86 710.16 582.82 706.67 582.86C700.37 582.95 696.47 586.72 696.51 592.61C696.55 598.58 700.39 602.62 706.46 602.74C713.26 602.88 720.08 602.87 726.88 602.78C732.74 602.7 737.04 598.67 737.1 593.44C737.17 587.04 733.05 582.85 726.59 582.79C723.44 582.76 720.28 582.79 717.13 582.79V582.8ZM772.05 582.88V582.92C768.56 582.92 765.07 582.82 761.58 582.94C755.9 583.15 752.19 586.94 752.13 592.41C752.07 598.4 755.94 602.64 761.83 602.75C768.48 602.87 775.13 602.86 781.77 602.77C787.71 602.7 791.69 598.8 791.69 593.28C791.69 587.12 787.62 582.94 781.52 582.88C778.36 582.85 775.2 582.88 772.05 582.88Z"
					fill={fillBlack}
				/>
				<path
					d="M876.53 152.85H627.97C631.45 143.58 634.7 134.77 638.06 126C643.02 113.02 647.97 100.04 653.08 87.1103C657.63 75.5903 666.42 69.6603 678.81 69.6503C728.41 69.6003 778.01 69.5803 827.61 69.5703C838.85 69.5703 848.24 75.7403 852.27 86.4103C858.49 102.84 864.34 119.41 870.36 135.92C872.33 141.34 874.32 146.75 876.55 152.85H876.53Z"
					fill={fillWhite}
				/>
				<path
					d="M627.91 251.16C623.25 251.16 618.56 250.79 613.94 251.23C598.25 252.72 586.31 236.09 589.75 219.85C592.44 207.14 601.02 197.54 616.56 198.53C625.16 199.08 633.84 198.33 642.48 198.4C655.68 198.52 665.13 206.47 667.76 219.4C670.33 232 664.43 244.81 653.03 249.44C648.93 251.11 643.97 250.81 639.39 251.1C635.58 251.35 631.74 251.15 627.91 251.14V251.16Z"
					fill={fillWhite}
				/>
				<path
					d="M874.34 251.21C869.68 251.21 864.97 250.75 860.37 251.29C844.08 253.23 831.88 233.77 835.95 219.1C839.11 207.7 847.42 197.74 862.6 198.5C871.73 198.96 880.9 198.44 890.05 198.65C901.83 198.92 912.14 209.03 913.39 221.19C914.81 235.06 907.45 248.18 895.69 250.43C888.81 251.74 881.47 250.67 874.34 250.67C874.34 250.85 874.34 251.03 874.34 251.21Z"
					fill={fillWhite}
				/>
				<path
					d="M752.16 237.09C741.68 237.09 731.191 237.14 720.711 237.07C714.321 237.03 710.851 234.4 710.711 229.76C710.571 224.78 714.64 221.25 720.79 221.24C741.76 221.21 762.731 221.15 783.701 221.29C791.621 221.34 796.05 227.62 792.04 233.21C790.58 235.25 787.19 236.86 784.61 236.96C773.81 237.37 762.98 237.13 752.17 237.13V237.09H752.16Z"
					fill={fillWhite}
				/>
				<path
					d="M603.11 639.76C595.63 639.76 589.33 639.76 583.03 639.76C570.25 639.74 562.54 629.14 566.44 616.97C569.43 607.63 573.7 604.54 583.64 604.53C589.78 604.53 595.91 604.53 602.87 604.53C602.87 597.56 602.87 591.32 602.87 585.07C602.88 574.75 610.83 567.23 621.24 566.88C632.18 566.51 640.31 576 639.74 584.75C639.33 591.02 639.66 597.35 639.66 604.4C646.34 604.4 652.61 604.51 658.88 604.38C670.22 604.13 678.15 612.91 676.64 624.2C675.23 634.73 669.67 639.66 659.07 639.73C652.79 639.77 646.51 639.73 639.58 639.73C639.58 646.41 639.61 652.51 639.58 658.61C639.53 667.3 632.12 674.28 622.24 674.99C613.04 675.65 603.84 668.9 603.2 660.39C602.7 653.81 603.1 647.16 603.1 639.76H603.11Z"
					fill={fillWhite}
				/>
				<path
					d="M810.33 618.95C811.96 615.81 812.96 612.07 815.32 609.62C831.21 593.09 847.29 576.73 863.53 560.55C868 556.1 873.89 555.68 879.17 558.75C884.34 561.76 887.27 566.64 886.32 572.47C885.76 575.94 883.52 579.62 881.02 582.22C866.72 597.06 852.01 611.52 837.66 626.31C833.62 630.47 829.54 633.6 823.41 632.9C816.51 632.11 811.25 626.31 810.33 618.93V618.95Z"
					fill={fillWhite}
				/>
				<path
					d="M865.54 664.16C857.8 663.56 853.31 660.87 850.82 655.32C848.41 649.94 849.9 645.17 853.74 641.12C860.95 633.51 868.24 625.99 875.62 618.54C884.28 609.8 892.81 600.9 901.87 592.59C910.4 584.76 923.33 589.44 924.76 600.92C925.19 604.4 923.78 609.25 921.41 611.74C905.8 628.11 889.79 644.1 873.64 659.94C871.23 662.31 867.39 663.23 865.55 664.15L865.54 664.16Z"
					fill={fillWhite}
				/>
				<path
					d="M717.14 582.81C720.29 582.81 723.45 582.79 726.6 582.81C733.06 582.87 737.18 587.06 737.11 593.46C737.05 598.68 732.75 602.72 726.89 602.8C720.08 602.89 713.27 602.9 706.47 602.76C700.4 602.63 696.56 598.59 696.52 592.63C696.48 586.74 700.38 582.97 706.68 582.88C710.17 582.83 713.65 582.88 717.14 582.88V582.82V582.81Z"
					fill={fillWhite}
				/>
				<path
					d="M772.06 582.89C775.22 582.89 778.38 582.87 781.53 582.89C787.62 582.95 791.7 587.12 791.7 593.29C791.7 598.82 787.73 602.71 781.78 602.78C775.13 602.86 768.48 602.88 761.84 602.76C755.95 602.65 752.08 598.42 752.14 592.42C752.2 586.95 755.9 583.16 761.59 582.95C765.08 582.82 768.57 582.93 772.06 582.93V582.89Z"
					fill={fillWhite}
				/>
				<path
					d="M358.149 739.94C383.831 739.94 404.649 719.122 404.649 693.44C404.649 667.759 383.831 646.94 358.149 646.94H69.1494C43.4682 646.94 22.6494 667.759 22.6494 693.44C22.6494 719.122 43.4682 739.94 69.1494 739.94H358.149Z"
					fill={fillBlack}
				/>
				<path
					d="M346.64 492.94H83.6396V542.94H346.64V492.94Z"
					fill={fillBlack}
				/>
				<path
					d="M242.12 200.44C285.89 200.44 329.66 200.39 373.43 200.51C378.66 200.52 384.21 200.59 389.06 202.24C398.33 205.39 403.71 214.84 402.28 223.33C400.65 233 392.19 240.8 382.22 241.02C369.93 241.29 357.63 240.93 345.33 240.93C268.79 240.91 192.24 240.93 115.7 240.85C110.43 240.85 105.02 240.61 99.8996 239.44C89.0596 236.97 81.5396 228.26 82.2696 220C83.1696 209.79 92.9596 200.87 104.32 200.63C119.79 200.31 135.27 200.46 150.75 200.45C181.21 200.43 211.66 200.45 242.12 200.43V200.44Z"
					fill={fillBlack}
				/>
				<path
					d="M354.98 497.13C344.21 511.27 343.41 526.28 356.64 538.9H324.6C324.6 536.1 324.56 531.48 324.61 528.86C324.68 525.29 324.11 522.86 320.45 522.98C317.05 523.09 315.76 525.59 315.76 528.87C315.79 542.34 315.77 555.81 315.77 571.04C310.31 566.16 305.73 562.53 301.72 558.34C298.38 554.86 296.15 554.33 292.52 558.21C288.42 562.61 282.37 568.13 276.61 572.99C276.61 565.86 277.62 558.28 277.61 552.69C277.59 544.53 277.5 536.38 277.55 528.22C277.57 525.14 276.52 522.32 273.31 522.95C271.43 523.32 269.33 526.08 268.66 528.18C267.86 530.72 268.47 533.71 268.47 537.35C259.74 537.35 251.5 537.35 243.26 537.35C199.09 537.31 154.93 537.32 110.76 537.19C101.67 537.16 93.8498 533.96 88.2498 526.43C83.6698 520.27 83.6398 513.17 88.3298 507.07C93.4198 500.45 100.29 497.11 108.62 497.1C146.04 497.05 183.46 497.09 220.88 497.1C263.32 497.1 305.77 497.12 348.21 497.14C350.13 497.14 352.06 497.14 354.97 497.14L354.98 497.13Z"
					fill={fillBlack}
				/>
				<path
					d="M230.19 622.8V557.97H267.98C267.98 564.64 268.1 571.36 267.93 578.08C267.84 581.6 268.31 585.1 271.7 585.8C274.02 586.28 277.3 585.48 279.12 583.88C284.73 578.94 289.84 573.33 295.54 567.58C300.85 572.79 306.02 577.95 311.28 582.98C313.8 585.39 316.06 588.73 320.24 586.82C324.45 584.89 324.47 581.04 324.4 576.96C324.29 570.75 324.37 564.53 324.37 557.94H354.56C345.73 567.49 340.04 577.65 340.22 590.83C340.4 604.12 346.14 614.07 356.64 622.8H230.18H230.19Z"
					fill={fillBlack}
				/>
				<path
					d="M268.08 537.92C268.08 534 268.28 531.11 268.28 528.44C268.28 525.95 270.75 523.25 273.16 523.25C276.64 523.25 277.47 527.48 277.47 529.12C277.84 541.26 277.18 552.89 277.22 565.04C277.22 566.66 277.22 570.27 277.22 573.56C283.14 568.53 288.26 562.69 292.73 558.21C295.69 555.24 297.56 555.19 300.44 558.09C304.74 562.42 309.42 566.39 315.12 571.59C315.12 568.3 315.12 566.42 315.12 564.54C315.19 553.39 315.32 542.23 315.3 531.08C315.3 527.27 315.69 523.45 320.34 523.53C324.99 523.61 325.35 527.51 325.18 531.26C325.09 533.22 325.16 536.19 325.16 538.79C334.86 538.79 344.07 538.77 353.29 538.79C360.89 538.81 366.09 542.17 366.69 548.94C367.2 554.62 361.67 560.74 354.64 561.18C345.85 561.73 337.01 561.48 328.2 561.6C327.38 561.61 326.56 561.75 324.99 561.91C324.99 568.34 324.86 574.78 325.04 581.2C325.14 584.75 324.25 588 320.74 588.62C318.43 589.03 315.23 587.96 313.33 586.43C307.4 581.64 301.91 573.32 295.92 567.91C290.66 572.81 285.62 577.59 280.48 582.27C278.03 584.5 275.6 588.93 271.71 587.09C267.93 585.29 267.99 583.07 268.06 579.62C268.19 573.83 268.1 568.03 268.1 561.88H230.11V622.81C232.41 622.81 234.53 622.81 236.65 622.81C274.61 622.7 312.57 622.68 350.52 622.4C356.45 622.36 361.3 623.62 364.83 628.58C367.23 631.95 367.44 635.41 365.03 638.77C361.59 643.59 357.83 646.65 350.88 646.63C258.98 646.37 167.08 646.51 75.1798 646.57C52.5698 646.58 29.0498 627.94 23.7098 606.01C18.4798 584.58 24.4098 566.4 40.4898 552.05C46.7098 546.5 55.1598 543.45 63.3098 538.86C62.8398 537.87 62.1198 535.71 60.8798 533.91C53.8598 523.8 54.0798 513.48 59.5698 502.86C62.0898 497.99 61.3998 496.53 55.9698 495.2C31.8098 489.28 14.9598 474.4 5.35979 451.92C0.849785 441.36 -0.760215 429.9 0.669785 417.92C2.91979 399.12 12.9098 385.39 26.4498 373.38C31.8698 368.58 31.7898 367.59 26.5798 362.82C16.9298 354 8.17979 344.56 4.20979 331.65C-6.54021 296.66 10.1698 259.94 43.1298 247.05C49.1098 244.71 55.1598 242.54 61.8798 240.03C61.4398 238.9 61.0798 237.36 60.2898 236.07C50.8598 220.66 55.7898 204.5 68.8098 194.05C69.5898 193.43 70.5998 193.03 71.2098 192.28C72.0998 191.19 72.7298 189.89 73.4698 188.68C72.3898 188.08 71.3698 187.21 70.2098 186.92C53.1298 182.69 38.6798 174.17 26.7498 161.16C14.2498 147.52 4.93979 132.12 1.76979 113.81C-3.45021 83.6602 2.68978 56.2802 23.2098 32.7002C31.2598 23.4502 40.0498 15.1302 51.1998 10.0502C62.0398 5.12016 73.3398 1.56016 85.6198 1.58016C187.49 1.72016 289.36 1.71016 391.22 1.66016C398.39 1.66016 404.68 3.61016 410 8.31016C419.67 16.8502 419.3 31.2802 409.07 39.1502C404.08 42.9902 398.51 46.0802 393.47 49.8702C375.47 63.4002 366.63 81.5902 368.99 103.96C370.81 121.26 381.23 134.09 394.82 144.42C400.23 148.53 405.56 152.74 410.94 156.9C421.75 165.26 417.03 183.3 404.46 187.66C398.94 189.58 392.84 190.21 386.95 190.53C378.1 191.01 378.08 190.68 379.21 200.01C376.7 200.01 374.26 200.01 371.83 200.01C284.59 200.03 197.35 200.09 110.11 200.01C102.22 200.01 95.3398 201.95 89.6898 207.58C81.7098 215.54 82.0598 226.03 90.5998 233.37C96.2798 238.26 103.02 240.27 110.41 240.28C155.35 240.35 200.28 240.42 245.22 240.45C286.5 240.48 327.79 240.45 369.07 240.49C371.88 240.49 375.64 239.77 377.32 241.24C381.26 244.73 385.3 248.88 387.31 253.61C390.44 260.97 389.87 268.62 383.35 274.65C376.57 280.92 370.4 287.64 368.17 296.97C364.96 310.41 366.2 323.18 373.65 335.94C380.65 347.94 386.08 355.52 389.65 355.32C391.48 355.22 396.5 355.32 398.33 355.32C407.58 355.32 413.25 358.87 415.86 366.3C418.5 373.8 416.29 381.11 409.22 386.56C401.94 392.17 395.17 397.94 390.61 406.29C378.31 428.8 388.58 451.67 404.93 464.12C406.78 465.53 408.7 466.86 410.43 468.41C416.83 474.14 418.52 480.22 415.87 487.57C413.58 493.92 406.8 498.52 398.95 498.46C377.33 498.3 355.71 497.72 334.09 497.68C260.09 497.54 186.09 497.6 112.09 497.48C103.39 497.47 95.5298 499.19 89.4898 505.86C79.7698 516.58 85.4098 528.34 96.4598 534.14C100.83 536.43 106.28 537.61 111.25 537.64C158.05 537.93 204.85 537.86 251.65 537.89C256.91 537.89 262.17 537.89 268.09 537.89L268.08 537.92ZM370.38 40.2602C370.05 39.9102 369.73 39.5602 369.4 39.2102C340.28 39.2102 311.17 39.2102 282.05 39.2102C233.52 39.2302 184.98 39.2802 136.45 39.2502C125.8 39.2502 116.01 42.1002 107.43 48.2702C83.6898 65.3402 76.7798 92.2002 87.3998 119.16C96.4198 142.09 113.48 155.61 139.22 155.75C155.97 155.84 172.71 155.79 189.46 155.78C240.54 155.76 291.62 155.72 342.7 155.69C352.33 155.69 361.97 155.69 371.6 155.69C353.56 140.13 343.16 121.53 343 98.0202C342.84 74.6202 351.89 55.2202 370.38 40.2502V40.2602ZM378.91 382.25C376.24 382.25 374.93 382.25 373.62 382.25C304.3 382.25 234.98 382.25 165.66 382.27C133.91 382.27 102.15 381.78 70.4098 382.49C30.0998 383.38 18.3498 425.41 33.4498 450.17C43.1198 466.04 57.3398 472.15 75.2398 472.13C174.94 472.03 274.63 472.04 374.33 472.01C375.74 472.01 377.15 472.01 379.3 472.01C378.48 470.73 378.24 470.15 377.83 469.74C369.63 461.57 364.06 451.91 360.95 440.73C360.62 439.54 358.2 438.22 356.71 438.16C347.07 437.82 337.41 437.91 327.76 437.68C320.92 437.52 315.94 433 316.06 427.38C316.19 421.13 321.02 416.63 327.84 416.52C337.32 416.37 346.81 416.38 356.29 416.1C357.76 416.06 360.2 415.06 360.5 414.02C363.88 402.31 369.82 392.08 378.92 382.24L378.91 382.25ZM359.13 355.19C350.84 345.39 344.59 335.82 341.29 324.64C340.46 321.83 338.86 321.68 336.52 321.68C322.71 321.71 308.9 321.61 295.08 321.6C274.54 321.59 253.99 321.65 233.45 321.6C226 321.59 221.54 317.33 221.59 310.54C221.63 304.82 226.72 300.32 233.33 300.19C235.49 300.15 237.66 300.14 239.82 300.14C271.77 300.14 303.72 300.14 335.67 300.1C338.03 300.1 340.48 300.8 341.33 297.07C343.79 286.32 348.87 276.88 356.74 269.04C357.12 268.66 357.17 267.96 357.52 267.02C355.6 267.02 354.12 267.02 352.64 267.02C283.25 266.97 213.85 266.92 144.46 266.88C120 266.86 95.5298 266.66 71.0698 266.92C52.6098 267.12 38.6598 275.46 31.2998 292.57C23.8098 310 26.5598 326.36 39.2798 340.72C49.4598 352.22 62.8598 355.33 77.4798 355.32C162.76 355.26 248.04 355.21 333.32 355.16C341.57 355.16 349.83 355.16 359.11 355.16L359.13 355.19ZM83.6598 561.8V622.34H132.3V561.8H83.6598ZM217.48 622.35V561.73H207.3V622.35H217.48ZM70.3298 561.55C61.9598 562.13 59.3398 563.58 59.3098 568.24C59.2298 583.71 59.1798 599.19 59.5498 614.66C59.7198 622 62.6398 623.66 70.3298 621.67V561.55ZM155.01 622.52V561.96H145.2V622.52H155.01Z"
					fill={fillWhite}
				/>
				<path
					d="M212.52 740.381C165.59 740.381 118.66 740.221 71.7302 740.521C62.7202 740.581 58.1502 737.671 56.5902 726.561C55.3802 717.941 55.8502 708.991 56.3702 700.241C57.0002 689.631 63.0902 684.671 74.2102 684.671C164.94 684.661 255.66 684.651 346.39 684.641C348.05 684.641 349.7 684.721 351.36 684.701C361.57 684.591 367.13 688.421 367.94 698.441C368.77 708.771 368.49 719.311 367.54 729.641C366.78 737.891 362.96 740.351 354.8 740.351C307.37 740.351 259.94 740.351 212.51 740.351V740.371L212.52 740.381Z"
					fill={fillWhite}
				/>
				<path
					d="M370.38 40.2597C351.89 55.2297 342.83 74.6297 343 98.0297C343.16 121.55 353.56 140.15 371.6 155.7C361.97 155.7 352.33 155.7 342.7 155.7C291.62 155.73 240.54 155.76 189.46 155.79C172.71 155.79 155.97 155.85 139.22 155.76C113.48 155.62 96.4197 142.1 87.3997 119.17C76.7797 92.1997 83.6897 65.3497 107.43 48.2797C116 42.1197 125.8 39.2597 136.45 39.2597C184.98 39.2897 233.52 39.2297 282.05 39.2197C311.17 39.2197 340.28 39.2197 369.4 39.2197C369.73 39.5697 370.05 39.9197 370.38 40.2697V40.2597Z"
					fill={fillBlack}
				/>
				<path
					d="M378.9 382.26C369.8 392.11 363.87 402.33 360.48 414.04C360.18 415.08 357.75 416.07 356.27 416.12C346.79 416.41 337.3 416.39 327.82 416.54C321 416.65 316.17 421.15 316.04 427.4C315.92 433.02 320.9 437.54 327.74 437.7C337.39 437.93 347.05 437.84 356.69 438.18C358.18 438.23 360.6 439.55 360.93 440.75C364.04 451.93 369.6 461.58 377.81 469.76C378.22 470.17 378.47 470.75 379.28 472.03C377.13 472.03 375.72 472.03 374.31 472.03C274.61 472.06 174.92 472.05 75.2201 472.15C57.3201 472.17 43.1001 466.06 33.4301 450.19C18.3301 425.42 30.0801 383.4 70.3901 382.51C102.12 381.81 133.89 382.3 165.64 382.29C234.96 382.27 304.28 382.28 373.6 382.27C374.91 382.27 376.22 382.27 378.89 382.27L378.9 382.26ZM144.1 416.54C144.1 416.54 144.1 416.58 144.1 416.59C133.47 416.59 122.84 416.46 112.21 416.64C104.97 416.76 100.96 420.91 101.05 427.61C101.13 433.98 105.32 437.85 112.5 437.94C119.81 438.04 127.12 437.97 134.43 437.97C147.89 437.96 161.34 438.02 174.8 437.88C181.52 437.81 186.31 433.14 186.16 427.24C185.99 420.82 181.24 416.5 174.51 416.52C164.38 416.56 154.24 416.52 144.11 416.52L144.1 416.54ZM235.59 437.83C240.08 437.83 244.57 437.92 249.05 437.81C255.25 437.65 259.54 433.37 259.55 427.52C259.56 421.52 254.96 416.46 249.07 416.41C240.1 416.33 231.12 416.34 222.15 416.59C215.77 416.77 211.92 420.95 211.94 427.08C211.97 433.23 216.31 437.67 222.61 437.83C226.93 437.94 231.25 437.85 235.57 437.83H235.59Z"
					fill={fillBlack}
				/>
				<path
					d="M359.12 355.19C349.84 355.19 341.58 355.19 333.33 355.19C248.05 355.24 162.77 355.28 77.4902 355.35C62.8702 355.36 49.4702 352.24 39.2902 340.75C26.5702 326.38 23.8102 310.03 31.3102 292.6C38.6702 275.48 52.6102 267.14 71.0802 266.95C95.5402 266.69 120.01 266.9 144.47 266.91C213.86 266.96 283.26 267.01 352.65 267.05C354.13 267.05 355.61 267.05 357.53 267.05C357.18 267.99 357.13 268.7 356.75 269.07C348.88 276.92 343.8 286.35 341.34 297.1C340.49 300.83 338.04 300.13 335.68 300.13C303.73 300.16 271.78 300.16 239.83 300.17C237.67 300.17 235.5 300.17 233.34 300.22C226.73 300.35 221.64 304.84 221.6 310.57C221.55 317.36 226.01 321.61 233.46 321.63C254 321.67 274.55 321.61 295.09 321.63C308.9 321.63 322.71 321.74 336.53 321.71C338.87 321.71 340.46 321.85 341.3 324.67C344.61 335.85 350.85 345.42 359.14 355.22L359.12 355.19ZM168.38 300.16C163.72 300.16 159.06 300.14 154.41 300.16C147.5 300.19 141.72 305.07 141.8 310.79C141.88 316.83 146.81 321.27 153.87 321.4C163.51 321.57 173.15 321.65 182.8 321.63C188.46 321.62 193.42 316.29 193.42 310.53C193.42 304.91 188.78 300.29 182.87 300.17C178.05 300.07 173.22 300.15 168.4 300.17L168.38 300.16Z"
					fill={fillBlack}
				/>
				<path
					d="M83.6602 561.811H132.3V622.351H83.6602V561.811Z"
					fill={fillBlack}
				/>
				<path d="M217.48 622.36H207.3V561.74H217.48V622.36Z" fill={fillBlack} />
				<path
					d="M70.32 561.561V621.681C62.64 623.671 59.72 622.011 59.54 614.671C59.17 599.201 59.22 583.731 59.3 568.251C59.32 563.591 61.95 562.141 70.32 561.561Z"
					fill={fillBlack}
				/>
				<path d="M155.01 622.53H145.2V561.97H155.01V622.53Z" fill={fillBlack} />
				<path
					d="M144.1 416.54C154.23 416.54 164.37 416.57 174.5 416.54C181.23 416.52 185.98 420.84 186.15 427.26C186.31 433.16 181.51 437.83 174.79 437.9C161.34 438.03 147.88 437.97 134.42 437.99C127.11 437.99 119.8 438.06 112.49 437.96C105.31 437.86 101.12 433.99 101.04 427.63C100.96 420.93 104.96 416.78 112.2 416.66C122.83 416.48 133.46 416.61 144.09 416.61C144.09 416.59 144.09 416.57 144.09 416.56L144.1 416.54Z"
					fill={fillWhite}
				/>
				<path
					d="M235.6 437.84C231.28 437.84 226.96 437.93 222.64 437.82C216.33 437.66 211.99 433.22 211.97 427.07C211.94 420.94 215.79 416.76 222.18 416.58C231.15 416.33 240.12 416.32 249.1 416.4C254.99 416.45 259.59 421.51 259.58 427.51C259.57 433.36 255.28 437.63 249.08 437.8C244.6 437.92 240.11 437.82 235.62 437.84H235.6Z"
					fill={fillWhite}
				/>
				<path
					d="M168.39 300.15C173.21 300.15 178.04 300.07 182.86 300.17C188.78 300.29 193.41 304.91 193.41 310.53C193.41 316.29 188.45 321.61 182.79 321.63C173.15 321.65 163.5 321.57 153.86 321.4C146.8 321.28 141.86 316.83 141.79 310.79C141.72 305.07 147.49 300.19 154.4 300.16C159.06 300.14 163.72 300.16 168.37 300.14L168.39 300.15Z"
					fill={fillWhite}
				/>
				<path
					d="M331.64 561.94H250.64V594.94H331.64V561.94Z"
					fill={fillBlack}
				/>
				<path
					d="M344.649 529.94V524.94C344.649 518.313 339.277 512.94 332.649 512.94H237.649C231.022 512.94 225.649 518.313 225.649 524.94V529.94C225.649 536.568 231.022 541.94 237.649 541.94H332.649C339.277 541.94 344.649 536.568 344.649 529.94Z"
					fill={fillBlack}
				/>
				<path
					d="M354.649 561.94C361.277 561.94 366.649 556.568 366.649 549.94C366.649 543.313 361.277 537.94 354.649 537.94H195.649C189.022 537.94 183.649 543.313 183.649 549.94C183.649 556.568 189.022 561.94 195.649 561.94H354.649Z"
					fill={fillWhite}
				/>
				<path
					d="M354.649 646.94C361.277 646.94 366.649 641.568 366.649 634.94C366.649 628.313 361.277 622.94 354.649 622.94H195.649C189.022 622.94 183.649 628.313 183.649 634.94C183.649 641.568 189.022 646.94 195.649 646.94H354.649Z"
					fill={fillWhite}
				/>
				<path
					d="M267.64 530.94V578.94L293.14 561.94L318.64 583.94V528.94L267.64 530.94Z"
					fill={fillBlack}
				/>
				<path
					d="M318.639 522.94C315.879 522.94 313.639 525.18 313.639 527.94V573.17L296.499 557.56C295.609 556.75 294.499 556.34 293.379 556.29C293.269 556.29 293.169 556.28 293.059 556.27C292.949 556.27 292.849 556.27 292.739 556.29C291.619 556.34 290.509 556.75 289.619 557.56L272.649 573.02V527.94C272.649 525.18 270.409 522.94 267.649 522.94C264.889 522.94 262.649 525.18 262.649 527.94V583.94C262.649 586.7 264.889 588.94 267.649 588.94C267.949 588.94 268.239 588.9 268.519 588.85C269.589 588.77 270.649 588.36 271.509 587.58L293.069 567.95L314.629 587.58C315.569 588.44 316.759 588.85 317.939 588.86C318.179 588.89 318.409 588.93 318.659 588.93C321.419 588.93 323.659 586.69 323.659 583.93V527.93C323.659 525.17 321.419 522.93 318.659 522.93L318.639 522.94Z"
					fill={fillWhite}
				/>
			</g>
		</svg>
	);
};
