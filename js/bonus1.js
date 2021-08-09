let text =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta nisl quis metus ornare, id vulputate lectus ullamcorper. In lobortis eros justo, interdum sodales ante congue non. Nulla elementum, lorem a venenatis porttitor, augue enim euismod mi, aliquet interdum enim urna ut sem. Nam venenatis ipsum vel finibus posuere. Fusce porttitor auctor quam, non pulvinar nulla pellentesque in. Proin tincidunt, nisl et faucibus dictum, felis erat fringilla felis, ac sagittis ligula justo quis metus. Suspendisse finibus orci et lacus dapibus, non laoreet metus ultricies. Sed lacus erat, lobortis sed est eget, hendrerit bibendum est. Proin tristique nulla non rhoncus pharetra. Maecenas laoreet, tortor in elementum aliquet, purus justo aliquam ligula, dignissim feugiat tellus lectus sed sapien. Sed vitae lectus pretium, ultricies quam ut, pellentesque magna. Sed vitae libero fringilla, gravida tellus at, ullamcorper quam. Sed a erat facilisis felis ornare ultricies. Nam dignissim neque id elit varius, vel semper ipsum pulvinar. Nulla sed ullamcorper libero, non aliquam nulla. Donec ex ligula, tempus vitae purus vel, ullamcorper vehicula dui. Curabitur ut urna efficitur, volutpat ante eget, ultrices lorem. Maecenas dolor augue, congue ut enim venenatis, vehicula dictum odio. Suspendisse sed sapien non ante rhoncus iaculis. Vivamus fringilla nibh neque, in commodo dolor faucibus nec. Nulla viverra risus et sodales vestibulum. Nam vel dignissim ex, quis lobortis felis. Morbi purus dui, iaculis et mi vitae, blandit hendrerit quam. Cras quis mattis ante, at feugiat magna. In ut erat vel tortor consectetur varius. Vestibulum sagittis quam aliquet felis euismod fermentum. Maecenas arcu mi, luctus sed elit ac, vehicula ultricies sapien. Aliquam pretium blandit mollis. Vivamus nec sem elementum ante ornare laoreet. Morbi tristique nulla sed lorem luctus lobortis. Ut sit amet placerat lacus, a sodales est. Donec non massa lorem. Sed molestie consequat nisl, id porttitor ligula interdum non. Donec eros mi, egestas vel libero in, efficitur condimentum erat. Nam nulla lacus, tristique nec libero a, auctor convallis justo. In tristique pellentesque leo, sit amet volutpat nibh. Vivamus tempor nisl et magna aliquam blandit viverra vitae lorem.";

let counter = 1;
let counterEt = 0;
for (let i = 0; i < text.length; i++) {
	if (text[i] === " ") {
		counter++;
	}
	if (text[i - 1] === " " && text[i] === "e" && text[i + 1] === "t") {
		counterEt++;
	}
}
console.log(counter);
console.log(counterEt);
